import {
  ACTIVITY_WARNINGS,
  FUNDING_PATH_WARNINGS,
  FUNDING_WARNING_BY_SEVERITY,
  RESERVE_WARNING_BY_SEVERITY
} from "../contracts/warningLanguage.js";
import { makeId, nowIso } from "../contracts/types.js";

const PACE_STATUS_TO_SEVERITY = {
  "Ahead of Pace": null,
  "On Pace": null,
  "Pace Unclear": "Watch",
  "Slightly Behind": "Elevated",
  "Materially Behind": "Serious"
};

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
  const paceSeverity = PACE_STATUS_TO_SEVERITY[paceStatus] ?? null;
  if (paceSeverity) {
    const body =
      FUNDING_WARNING_BY_SEVERITY[paceSeverity] ?? FUNDING_PATH_WARNINGS.paceBehind.body;
    flags.push({
      id: makeId("risk"),
      campaign_id: input.campaignId,
      scenario_id: input.scenarioId,
      created_at: nowIso(),
      flag_type: "Funding Pace",
      severity: paceSeverity === "Serious" ? "Warning" : "Caution",
      title: FUNDING_PATH_WARNINGS.paceBehind.title,
      explanation: body,
      trigger_metric: "pace_status",
      trigger_value: input.fundingRequirement.total_raise_target,
      recommended_action: "Increase candidate call time volume immediately.",
      status: "Active"
    });
  }

  if (input.reserveStatus === "Reserve Watch" || input.reserveStatus === "Reserve Pressure" || input.reserveStatus === "Reserve Breach") {
    const key =
      input.reserveStatus === "Reserve Breach"
        ? "Reserve Breach"
        : input.reserveStatus === "Reserve Pressure"
        ? "Reserve Pressure"
        : "Reserve Watch";
    flags.push({
      id: makeId("risk"),
      campaign_id: input.campaignId,
      scenario_id: input.scenarioId,
      created_at: nowIso(),
      flag_type: "Reserve",
      severity:
        input.reserveStatus === "Reserve Breach"
          ? "Critical"
          : input.reserveStatus === "Reserve Pressure"
          ? "Warning"
          : "Caution",
      title: key,
      explanation: RESERVE_WARNING_BY_SEVERITY[key],
      trigger_metric: "reserve_status",
      trigger_value: input.fundingRequirement.reserve_floor,
      recommended_action: "Protect reserve before approving additional optional spending.",
      status: "Active"
    });
  }

  if (input.fieldFundingStatus && input.fieldFundingStatus !== "Greenlight") {
    flags.push({
      id: makeId("risk"),
      campaign_id: input.campaignId,
      scenario_id: input.scenarioId,
      created_at: nowIso(),
      flag_type: "Field Funding",
      severity: input.fieldFundingStatus === "Redline" ? "Critical" : "Warning",
      title: "Field funding is under strain",
      explanation:
        "Field-specific commitments are starting to outrun the current finance path. Treat expansion decisions as conditional until coverage improves.",
      trigger_metric: "funded_percent_of_field_plan",
      trigger_value: input.fundedPercentOfFieldPlan ?? 0,
      recommended_action: "Hold field expansion until the next checkpoint improves.",
      status: "Active"
    });
  }

  if (input.activityCompletionRate != null && input.activityCompletionRate < 0.7) {
    flags.push({
      id: makeId("risk"),
      campaign_id: input.campaignId,
      scenario_id: input.scenarioId,
      created_at: nowIso(),
      flag_type: "Activity Execution",
      severity: input.activityCompletionRate < 0.5 ? "Warning" : "Caution",
      title: "Weak completion",
      explanation: ACTIVITY_WARNINGS.weakCompletion,
      trigger_metric: "activity_completion_rate",
      trigger_value: input.activityCompletionRate,
      recommended_action: "Increase scheduling and follow-up discipline for the next period.",
      status: "Active"
    });
  }

  return flags;
}
