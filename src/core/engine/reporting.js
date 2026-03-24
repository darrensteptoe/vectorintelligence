import {
  CANDIDATE_BRIEF_TEMPLATE,
  FINANCE_COMMITTEE_MEMO_TEMPLATE,
  LEADERSHIP_MEMO_TEMPLATE,
  WEEKLY_FINANCE_MEMO_TEMPLATE
} from "../contracts/reportingLanguage.js";
import {
  OVERALL_PATH_STATUS_DESCRIPTIONS,
  RESERVE_STATUS_DESCRIPTIONS,
  FIELD_FUNDING_STATUS_DESCRIPTIONS
} from "../contracts/warningLanguage.js";

/**
 * @param {number} value
 * @returns {string}
 */
function currency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

/**
 * @param {{
 *   campaignName: string,
 *   weekEndingDate: string,
 *   fundingRequirement: import('../contracts/types.js').FundingRequirementSnapshot,
 *   reserveStatus: string,
 *   fieldFundingStatus?: string,
 *   raisedThisPeriod: number,
 *   plannedRaiseThisPeriod: number,
 *   recommendations: string[]
 * }} input
 */
export function composeWeeklyFinanceMemo(input) {
  const pathStatus = input.fundingRequirement.path_status;

  return {
    header: `Weekly Finance Memo - ${input.campaignName} - ${input.weekEndingDate}`,
    opening: `The campaign remains ${pathStatus} against the active finance path. This week's main question is whether near-term finance activity is strong enough to support the next spending window cleanly.`,
    current_condition: {
      raised_this_period: currency(input.raisedThisPeriod),
      planned_raise_this_period: currency(input.plannedRaiseThisPeriod),
      pace_status: pathStatus,
      reserve_status: input.reserveStatus,
      field_funding_status: input.fieldFundingStatus ?? "N/A"
    },
    interpretation: {
      path: OVERALL_PATH_STATUS_DESCRIPTIONS[pathStatus],
      reserve: RESERVE_STATUS_DESCRIPTIONS[input.reserveStatus],
      field:
        input.fieldFundingStatus != null
          ? FIELD_FUNDING_STATUS_DESCRIPTIONS[input.fieldFundingStatus]
          : "No bridge status provided for this period."
    },
    recommendations: input.recommendations,
    template_reference: WEEKLY_FINANCE_MEMO_TEMPLATE
  };
}

/**
 * @param {{weeklyRaiseGoal: number, topAsks: string[], followUp: string, eventPriorities: string[], oneRisk: string}} input
 */
export function composeCandidateBrief(input) {
  return {
    opening: CANDIDATE_BRIEF_TEMPLATE.opening,
    this_week_raise_goal: currency(input.weeklyRaiseGoal),
    top_asks: input.topAsks,
    most_important_follow_up: input.followUp,
    event_priorities: input.eventPriorities,
    one_risk_to_watch: input.oneRisk
  };
}

/**
 * @param {{committeeTarget: number, topProspects: string[], unresolvedCommitments: string[], eventSupportStatus: string, accountabilityNotes: string[]}} input
 */
export function composeFinanceCommitteeMemo(input) {
  return {
    opening: FINANCE_COMMITTEE_MEMO_TEMPLATE.opening,
    committee_target_for_period: currency(input.committeeTarget),
    top_assigned_prospects: input.topProspects,
    commitments_needing_resolution: input.unresolvedCommitments,
    event_support_status: input.eventSupportStatus,
    accountability_notes: input.accountabilityNotes
  };
}

/**
 * @param {{
 *   status: string,
 *   safeCommitments: string[],
 *   unsafeCommitments: string[],
 *   fieldAffordabilityNote: string,
 *   spendingPressureNote: string,
 *   decisionPoints: string[]
 * }} input
 */
export function composeLeadershipMemo(input) {
  return {
    opening: LEADERSHIP_MEMO_TEMPLATE.opening.replace("[status]", input.status),
    budget_status: input.status,
    safe_commitments: input.safeCommitments,
    unsafe_commitments: input.unsafeCommitments,
    field_affordability_note: input.fieldAffordabilityNote,
    spending_pressure_note: input.spendingPressureNote,
    recommended_decision_points: input.decisionPoints
  };
}
