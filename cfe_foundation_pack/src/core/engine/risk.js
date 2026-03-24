import { ACTIVITY_WARNINGS, WARNING_FAMILIES } from "../contracts/warningLanguage.js";
import { makeId, nowIso } from "../contracts/types.js";

const PATH_STATUS_TO_FLAG = {
  Watch: {
    severity: "Caution",
    title: WARNING_FAMILIES.fundingPace.titleOptions[0],
    recommended: WARNING_FAMILIES.fundingPace.recommendedActions[1]
  },
  "Off Path": {
    severity: "Warning",
    title: WARNING_FAMILIES.fundingPace.titleOptions[2],
    recommended: WARNING_FAMILIES.fundingPace.recommendedActions[0]
  }
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
  const pathConfig = PATH_STATUS_TO_FLAG[paceStatus] ?? null;
  if (pathConfig) {
    flags.push({
      id: makeId("risk"),
      campaign_id: input.campaignId,
      scenario_id: input.scenarioId,
      created_at: nowIso(),
      flag_type: "Funding Pace",
      severity: pathConfig.severity,
      title: pathConfig.title,
      explanation: WARNING_FAMILIES.fundingPace.descriptionTemplate,
      trigger_metric: "path_status",
      trigger_value: input.fundingRequirement.total_raise_target,
      recommended_action: pathConfig.recommended,
      status: "Active"
    });
  }

  if (input.reserveStatus === "Tight" || input.reserveStatus === "At Risk") {
    flags.push({
      id: makeId("risk"),
      campaign_id: input.campaignId,
      scenario_id: input.scenarioId,
      created_at: nowIso(),
      flag_type: "Reserve Pressure",
      severity: input.reserveStatus === "At Risk" ? "Critical" : "Caution",
      title:
        input.reserveStatus === "At Risk"
          ? WARNING_FAMILIES.reservePressure.titleOptions[1]
          : WARNING_FAMILIES.reservePressure.titleOptions[0],
      explanation: WARNING_FAMILIES.reservePressure.descriptionTemplate,
      trigger_metric: "reserve_status",
      trigger_value: input.fundingRequirement.reserve_floor,
      recommended_action: WARNING_FAMILIES.reservePressure.recommendedActions[0],
      status: "Active"
    });
  }

  if (input.fieldFundingStatus && input.fieldFundingStatus !== "Greenlight") {
    flags.push({
      id: makeId("risk"),
      campaign_id: input.campaignId,
      scenario_id: input.scenarioId,
      created_at: nowIso(),
      flag_type: "Field Affordability",
      severity: input.fieldFundingStatus === "Redline" ? "Critical" : "Warning",
      title:
        input.fieldFundingStatus === "Redline"
          ? WARNING_FAMILIES.fieldAffordability.titleOptions[2]
          : WARNING_FAMILIES.fieldAffordability.titleOptions[0],
      explanation: WARNING_FAMILIES.fieldAffordability.descriptionTemplate,
      trigger_metric: "funded_percent_of_field_plan",
      trigger_value: input.fundedPercentOfFieldPlan ?? 0,
      recommended_action: WARNING_FAMILIES.fieldAffordability.recommendedActions[0],
      status: "Active"
    });
  }

  if (input.activityCompletionRate != null && input.activityCompletionRate < 0.8) {
    flags.push({
      id: makeId("risk"),
      campaign_id: input.campaignId,
      scenario_id: input.scenarioId,
      created_at: nowIso(),
      flag_type: "Activity Execution",
      severity: input.activityCompletionRate < 0.6 ? "Warning" : "Caution",
      title:
        input.activityCompletionRate < 0.6
          ? WARNING_FAMILIES.eventUnderperformance.titleOptions[1]
          : "Finance activity is uneven",
      explanation:
        input.activityCompletionRate < 0.6
          ? ACTIVITY_WARNINGS.weakCompletion
          : "Some planned finance work is happening, but not consistently enough to feel secure.",
      trigger_metric: "activity_completion_rate",
      trigger_value: input.activityCompletionRate,
      recommended_action:
        input.activityCompletionRate < 0.6
          ? WARNING_FAMILIES.eventUnderperformance.recommendedActions[1]
          : "Tighten scheduling and follow-up discipline for the next two weeks.",
      status: "Active"
    });
  }

  return flags;
}
