import {
  BUDGET_HEALTH_REPORT_CONTENT,
  CANDIDATE_BRIEF_CONTENT,
  DONOR_INTELLIGENCE_MEMO_CONTENT,
  FINANCE_COMMITTEE_BRIEF_CONTENT,
  LEADERSHIP_RISK_REPORT_CONTENT,
  REPORT_SECTION_STRUCTURE,
  WEEKLY_FINANCE_MEMO_CONTENT
} from "../contracts/reportingLanguage.js";

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
 *   fundingRequirement: import('../contracts/types.js').FundingRequirementSnapshot & { funding_status?: string, pace_status?: string },
 *   reserveStatus: string,
 *   raisedThisPeriod: number,
 *   plannedRaiseThisPeriod: number,
 *   recommendations: string[]
 * }} input
 */
export function composeWeeklyFinanceMemo(input) {
  return {
    title: WEEKLY_FINANCE_MEMO_CONTENT.coverTitle,
    header: `Weekly Finance Memo - ${input.campaignName} - ${input.weekEndingDate}`,
    section_structure: REPORT_SECTION_STRUCTURE,
    cover_summary: WEEKLY_FINANCE_MEMO_CONTENT.coverSummary,
    executive_summary_template: WEEKLY_FINANCE_MEMO_CONTENT.executiveSummaryTemplate,
    budget_health_text: WEEKLY_FINANCE_MEMO_CONTENT.budgetHealth,
    pace_production_text: WEEKLY_FINANCE_MEMO_CONTENT.paceProduction,
    activity_text: WEEKLY_FINANCE_MEMO_CONTENT.activity,
    risk_summary_text: WEEKLY_FINANCE_MEMO_CONTENT.riskSummary,
    current_condition: {
      funding_status: input.fundingRequirement.funding_status ?? "Not Yet Fundable",
      pace_status: input.fundingRequirement.pace_status ?? input.fundingRequirement.path_status,
      reserve_status: input.reserveStatus,
      raised_this_period: currency(input.raisedThisPeriod),
      planned_raise_this_period: currency(input.plannedRaiseThisPeriod)
    },
    recommended_actions:
      input.recommendations.length > 0 ? input.recommendations : WEEKLY_FINANCE_MEMO_CONTENT.recommendedActions
  };
}

/**
 * @param {{weeklyRaiseGoal: number, topAsks: string[], followUp: string, eventPriorities: string[], oneRisk: string, fundingStatus?: string}} input
 */
export function composeCandidateBrief(input) {
  return {
    title: CANDIDATE_BRIEF_CONTENT.title,
    opening: CANDIDATE_BRIEF_CONTENT.opening,
    summary_template: CANDIDATE_BRIEF_CONTENT.summaryTemplate,
    this_week_raise_goal: currency(input.weeklyRaiseGoal),
    highest_priority_asks: input.topAsks,
    follow_up_focus: input.followUp,
    event_priorities: input.eventPriorities,
    one_risk: input.oneRisk,
    caution_language: CANDIDATE_BRIEF_CONTENT.cautionLanguage,
    what_candidate_needs_to_know: CANDIDATE_BRIEF_CONTENT.whatCandidateNeeds
  };
}

/**
 * @param {{committeeTarget: number, topProspects: string[], unresolvedCommitments: string[], eventSupportStatus: string, accountabilityNotes: string[]}} input
 */
export function composeFinanceCommitteeMemo(input) {
  return {
    title: FINANCE_COMMITTEE_BRIEF_CONTENT.title,
    opening: FINANCE_COMMITTEE_BRIEF_CONTENT.opening,
    summary_template: FINANCE_COMMITTEE_BRIEF_CONTENT.summaryTemplate,
    committee_target_for_period: currency(input.committeeTarget),
    assigned_prospects: input.topProspects,
    unresolved_commitments: input.unresolvedCommitments,
    event_program_status: input.eventSupportStatus,
    accountability_template: FINANCE_COMMITTEE_BRIEF_CONTENT.accountability,
    committee_action_language:
      input.accountabilityNotes.length > 0
        ? input.accountabilityNotes
        : FINANCE_COMMITTEE_BRIEF_CONTENT.actionLanguage
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
    title: BUDGET_HEALTH_REPORT_CONTENT.title,
    opening: BUDGET_HEALTH_REPORT_CONTENT.opening,
    summary_template: BUDGET_HEALTH_REPORT_CONTENT.summaryTemplate,
    total_budget_status: input.status,
    field_affordability: input.fieldAffordabilityNote,
    major_upcoming_cost_windows: input.spendingPressureNote,
    safe_to_proceed: input.safeCommitments,
    do_not_proceed_yet: input.unsafeCommitments,
    recommended_actions: input.decisionPoints,
    category_pressure_language: BUDGET_HEALTH_REPORT_CONTENT.categoryPressureLanguage,
    greenlight_caution_redline: BUDGET_HEALTH_REPORT_CONTENT.greenlightCautionRedline
  };
}

/**
 * @param {{donorSummary: string, interpretation: string}} input
 */
export function composeDonorIntelligenceMemo(input) {
  return {
    title: DONOR_INTELLIGENCE_MEMO_CONTENT.title,
    opening: DONOR_INTELLIGENCE_MEMO_CONTENT.opening,
    summary_template: DONOR_INTELLIGENCE_MEMO_CONTENT.summaryTemplate,
    donor_summary: input.donorSummary,
    interpretation: input.interpretation,
    guidance: DONOR_INTELLIGENCE_MEMO_CONTENT.interpretationGuidance
  };
}

/**
 * @param {{riskList: string[]}} input
 */
export function composeLeadershipRiskReport(input) {
  return {
    title: LEADERSHIP_RISK_REPORT_CONTENT.title,
    opening: LEADERSHIP_RISK_REPORT_CONTENT.opening,
    summary_template: LEADERSHIP_RISK_REPORT_CONTENT.summaryTemplate,
    risks: input.riskList,
    pace_risk: LEADERSHIP_RISK_REPORT_CONTENT.riskParagraphs.pace,
    reserve_risk: LEADERSHIP_RISK_REPORT_CONTENT.riskParagraphs.reserve,
    field_funding_risk: LEADERSHIP_RISK_REPORT_CONTENT.riskParagraphs.fieldFunding
  };
}
