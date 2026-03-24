import { RISK_FLAG_LANGUAGE } from "../contracts/warningLanguage.js";
import { makeId, nowIso } from "../contracts/types.js";

const PATH_STATUS_TO_SEVERITY = {
  "On Path": null,
  "Slightly Behind": "Watch",
  "Behind Pace": "Caution",
  "At Risk": "Warning",
  "Off Path": "Critical"
};

/**
 * @param {{
 *   campaignId: string,
 *   scenarioId: string,
 *   fundingRequirement: import('../contracts/types.js').FundingRequirementSnapshot,
 *   reserveStatus: string,
 *   fieldFundingStatus?: string,
 *   fundedPercentOfFieldPlan?: number
 * }} input
 * @returns {import('../contracts/types.js').RiskFlag[]}
 */
export function buildCoreRiskFlags(input) {
  /** @type {import('../contracts/types.js').RiskFlag[]} */
  const flags = [];

  const pathSeverity = PATH_STATUS_TO_SEVERITY[input.fundingRequirement.path_status] ?? null;
  if (pathSeverity) {
    const language = RISK_FLAG_LANGUAGE.behindPace;
    flags.push({
      id: makeId("risk"),
      campaign_id: input.campaignId,
      scenario_id: input.scenarioId,
      created_at: nowIso(),
      flag_type: "Behind Pace",
      severity: pathSeverity,
      title: language.titles[0],
      explanation: language.description,
      trigger_metric: "path_status",
      trigger_value: input.fundingRequirement.total_raise_target,
      recommended_action: language.recommendedActions[0],
      status: "Active"
    });
  }

  if (input.reserveStatus === "Caution" || input.reserveStatus === "Redline") {
    const language = RISK_FLAG_LANGUAGE.reservePressure;
    flags.push({
      id: makeId("risk"),
      campaign_id: input.campaignId,
      scenario_id: input.scenarioId,
      created_at: nowIso(),
      flag_type: "Reserve Pressure",
      severity: input.reserveStatus === "Redline" ? "Critical" : "Caution",
      title: language.titles[0],
      explanation: language.description,
      trigger_metric: "reserve_status",
      trigger_value: input.fundingRequirement.reserve_floor,
      recommended_action: language.recommendedActions[0],
      status: "Active"
    });
  }

  if (input.fieldFundingStatus && input.fieldFundingStatus !== "Greenlight") {
    const language = RISK_FLAG_LANGUAGE.fieldNotCashSafe;
    flags.push({
      id: makeId("risk"),
      campaign_id: input.campaignId,
      scenario_id: input.scenarioId,
      created_at: nowIso(),
      flag_type: "Field Not Cash-Safe",
      severity: input.fieldFundingStatus === "Redline" ? "Critical" : "Caution",
      title: language.titles[0],
      explanation: language.description,
      trigger_metric: "funded_percent_of_field_plan",
      trigger_value: input.fundedPercentOfFieldPlan ?? 0,
      recommended_action: language.recommendedActions[0],
      status: "Active"
    });
  }

  return flags;
}
