import { WARNING_LIBRARY_BY_TRIGGER_FAMILY } from "../contracts/warningLanguage.js";
import { makeId, nowIso } from "../contracts/types.js";

const BAND_TO_SEVERITY = {
  caution: "Caution",
  warning: "Warning",
  redline: "Critical"
};

const PATH_STATUS_TO_BAND = {
  Watch: "caution",
  "Off Path": "warning"
};

const RESERVE_STATUS_TO_BAND = {
  Tight: "caution",
  "At Risk": "redline"
};

const FIELD_STATUS_TO_BAND = {
  Caution: "caution",
  Redline: "redline"
};

/**
 * @param {string} family
 * @param {"caution" | "warning" | "redline"} band
 */
function warningFor(family, band) {
  return WARNING_LIBRARY_BY_TRIGGER_FAMILY[family][band];
}

/**
 * @param {number | undefined} completionRate
 */
function activityBand(completionRate) {
  if (completionRate == null || completionRate >= 0.8) {
    return null;
  }
  if (completionRate < 0.5) {
    return "redline";
  }
  if (completionRate < 0.65) {
    return "warning";
  }
  return "caution";
}

/**
 * @param {{
 *   campaignId: string,
 *   scenarioId: string,
 *   fundingRequirement: import('../contracts/types.js').FundingRequirementSnapshot & { pace_status?: string },
 *   reserveStatus: string,
 *   fieldFundingStatus?: string,
 *   fundedPercentOfFieldPlan?: number,
 *   activityCompletionRate?: number
 * }} input
 * @returns {import('../contracts/types.js').RiskFlag[]}
 */
export function buildCoreRiskFlags(input) {
  /** @type {import('../contracts/types.js').RiskFlag[]} */
  const flags = [];

  const paceStatus = input.fundingRequirement.pace_status ?? input.fundingRequirement.path_status;
  const paceBand = PATH_STATUS_TO_BAND[paceStatus] ?? null;
  if (paceBand) {
    const warning = warningFor("paceRisk", paceBand);
    flags.push({
      id: makeId("risk"),
      campaign_id: input.campaignId,
      scenario_id: input.scenarioId,
      created_at: nowIso(),
      flag_type: "Funding Pace",
      severity: BAND_TO_SEVERITY[paceBand],
      title: warning.title,
      explanation: warning.body,
      trigger_metric: "path_status",
      trigger_value: input.fundingRequirement.total_raise_target,
      recommended_action: warning.recommended_action,
      status: "Active"
    });
  }

  const reserveBand = RESERVE_STATUS_TO_BAND[input.reserveStatus] ?? null;
  if (reserveBand) {
    const warning = warningFor("reserveRisk", reserveBand);
    flags.push({
      id: makeId("risk"),
      campaign_id: input.campaignId,
      scenario_id: input.scenarioId,
      created_at: nowIso(),
      flag_type: "Reserve Pressure",
      severity: BAND_TO_SEVERITY[reserveBand],
      title: warning.title,
      explanation: warning.body,
      trigger_metric: "reserve_status",
      trigger_value: input.fundingRequirement.reserve_floor,
      recommended_action: warning.recommended_action,
      status: "Active"
    });
  }

  const fieldBand = input.fieldFundingStatus ? FIELD_STATUS_TO_BAND[input.fieldFundingStatus] ?? null : null;
  if (fieldBand) {
    const warning = warningFor("fieldFundingRisk", fieldBand);
    flags.push({
      id: makeId("risk"),
      campaign_id: input.campaignId,
      scenario_id: input.scenarioId,
      created_at: nowIso(),
      flag_type: "Field Affordability",
      severity: BAND_TO_SEVERITY[fieldBand],
      title: warning.title,
      explanation: warning.body,
      trigger_metric: "funded_percent_of_field_plan",
      trigger_value: input.fundedPercentOfFieldPlan ?? 0,
      recommended_action: warning.recommended_action,
      status: "Active"
    });
  }

  const completionBand = activityBand(input.activityCompletionRate);
  if (completionBand) {
    const warning = warningFor("activityCompletionRisk", completionBand);
    flags.push({
      id: makeId("risk"),
      campaign_id: input.campaignId,
      scenario_id: input.scenarioId,
      created_at: nowIso(),
      flag_type: "Activity Execution",
      severity: BAND_TO_SEVERITY[completionBand],
      title: warning.title,
      explanation: warning.body,
      trigger_metric: "activity_completion_rate",
      trigger_value: input.activityCompletionRate,
      recommended_action: warning.recommended_action,
      status: "Active"
    });
  }

  return flags;
}
