import {
  CANDIDATE_BRIEF_SECTIONS,
  EXEC_SUMMARY_TEMPLATES,
  FINANCE_COMMITTEE_BRIEF_SECTIONS,
  LEADERSHIP_BUDGET_HEALTH_SECTIONS,
  REPORT_STATUS_PHRASES,
  WEEKLY_FINANCE_MEMO_SECTIONS
} from "../contracts/reportingLanguage.js";
import {
  FIELD_FUNDING_STATUS_DESCRIPTIONS,
  OVERALL_PATH_STATUS_DESCRIPTIONS,
  RESERVE_STATUS_DESCRIPTIONS
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
 * @param {string} pathStatus
 * @returns {string}
 */
function summaryForStatus(pathStatus) {
  if (pathStatus === "On Path") {
    return EXEC_SUMMARY_TEMPLATES.strong;
  }
  if (pathStatus === "Watch") {
    return EXEC_SUMMARY_TEMPLATES.mixed;
  }
  return EXEC_SUMMARY_TEMPLATES.weak;
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
  const phraseClass = pathStatus === "On Path" ? "strong" : pathStatus === "Watch" ? "mixed" : "weak";

  return {
    header: `Weekly Finance Memo - ${input.campaignName} - ${input.weekEndingDate}`,
    sections: WEEKLY_FINANCE_MEMO_SECTIONS,
    executive_summary: summaryForStatus(pathStatus),
    period_summary: `For this period, the campaign targeted ${currency(input.plannedRaiseThisPeriod)} and has brought in ${currency(input.raisedThisPeriod)} so far.`,
    current_condition: {
      path_status: pathStatus,
      reserve_status: input.reserveStatus,
      field_funding_status: input.fieldFundingStatus ?? "N/A",
      status_phrase_examples: REPORT_STATUS_PHRASES[phraseClass]
    },
    interpretation: {
      path: OVERALL_PATH_STATUS_DESCRIPTIONS[pathStatus],
      reserve: RESERVE_STATUS_DESCRIPTIONS[input.reserveStatus],
      field:
        input.fieldFundingStatus != null
          ? FIELD_FUNDING_STATUS_DESCRIPTIONS[input.fieldFundingStatus]
          : "No bridge status provided for this period."
    },
    risks: input.recommendations.length === 0 ? [] : input.recommendations,
    recommended_actions: input.recommendations
  };
}

/**
 * @param {{weeklyRaiseGoal: number, topAsks: string[], followUp: string, eventPriorities: string[], oneRisk: string}} input
 */
export function composeCandidateBrief(input) {
  return {
    opening:
      "This brief is designed to keep the candidate focused on the highest-value finance work for the current period.",
    sections: CANDIDATE_BRIEF_SECTIONS,
    this_week_raise_goal: currency(input.weeklyRaiseGoal),
    highest_priority_asks: input.topAsks,
    candidate_follow_up_focus: input.followUp,
    event_priorities: input.eventPriorities,
    concise_risk: input.oneRisk
  };
}

/**
 * @param {{committeeTarget: number, topProspects: string[], unresolvedCommitments: string[], eventSupportStatus: string, accountabilityNotes: string[]}} input
 */
export function composeFinanceCommitteeMemo(input) {
  return {
    opening:
      "This brief is intended to keep the finance committee focused on tangible movement rather than broad encouragement.",
    sections: FINANCE_COMMITTEE_BRIEF_SECTIONS,
    committee_target_for_period: currency(input.committeeTarget),
    assigned_prospects: input.topProspects,
    unresolved_commitments: input.unresolvedCommitments,
    event_program_status: input.eventSupportStatus,
    committee_ask: input.accountabilityNotes
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
    opening:
      "This report is meant to help leadership decide what parts of the campaign plan are currently supportable, what is under pressure, and what should not expand yet.",
    sections: LEADERSHIP_BUDGET_HEALTH_SECTIONS,
    total_budget_status: input.status,
    field_affordability: input.fieldAffordabilityNote,
    major_upcoming_cost_windows: input.spendingPressureNote,
    safe_to_proceed: input.safeCommitments,
    do_not_proceed_yet: input.unsafeCommitments,
    recommended_actions: input.decisionPoints
  };
}
