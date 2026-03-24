import {
  BUDGET_HEALTH_REPORT_CONTENT,
  CANDIDATE_BRIEF_CONTENT,
  DONOR_INTELLIGENCE_MEMO_CONTENT,
  FINANCE_COMMITTEE_BRIEF_CONTENT,
  LEADERSHIP_RISK_REPORT_CONTENT,
  REPORT_PREFACE_VARIANTS,
  REPORT_SECTION_STRUCTURE,
  REPORT_STATUS_PHRASES,
  UNIVERSAL_CLOSING_BLOCK,
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
 * @param {number} value
 * @returns {string}
 */
function percent(value) {
  return `${Math.round(value * 100)}%`;
}

/**
 * @param {string} pathStatus
 * @returns {string}
 */
function statusPhrase(pathStatus) {
  if (pathStatus === "On Path") {
    return REPORT_STATUS_PHRASES.strong[1];
  }
  if (pathStatus === "Watch") {
    return REPORT_STATUS_PHRASES.mixed[0];
  }
  return REPORT_STATUS_PHRASES.weak[0];
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
  const pathStatus = input.fundingRequirement.pace_status ?? input.fundingRequirement.path_status;
  const executiveSummary =
    pathStatus === "On Path"
      ? WEEKLY_FINANCE_MEMO_CONTENT.executiveSummaryTemplates.onPath
      : pathStatus === "Watch"
      ? WEEKLY_FINANCE_MEMO_CONTENT.executiveSummaryTemplates.watch
      : WEEKLY_FINANCE_MEMO_CONTENT.executiveSummaryTemplates.offPath;

  const variance = input.raisedThisPeriod - input.plannedRaiseThisPeriod;
  const attainment =
    input.plannedRaiseThisPeriod <= 0 ? 1 : input.raisedThisPeriod / input.plannedRaiseThisPeriod;

  return {
    title: WEEKLY_FINANCE_MEMO_CONTENT.title,
    header: `Weekly Finance Memo - ${input.campaignName} - ${input.weekEndingDate}`,
    preface: REPORT_PREFACE_VARIANTS.standard,
    section_structure: REPORT_SECTION_STRUCTURE,
    executive_summary: executiveSummary,
    funding_status_read:
      `The current raise path calls for ${currency(input.plannedRaiseThisPeriod)} during this period. ` +
      `The campaign recorded ${currency(input.raisedThisPeriod)}, leaving a period variance of ${currency(
        variance
      )}. Current attainment is ${percent(attainment)}.`,
    activity_read: WEEKLY_FINANCE_MEMO_CONTENT.activityReadTemplate,
    pledge_pipeline_read: WEEKLY_FINANCE_MEMO_CONTENT.pledgeReadTemplate,
    risk_read: WEEKLY_FINANCE_MEMO_CONTENT.riskReadTemplates,
    current_condition: {
      path_status: pathStatus,
      path_phrase: statusPhrase(pathStatus),
      reserve_status: input.reserveStatus,
      raised_this_period: currency(input.raisedThisPeriod),
      planned_raise_this_period: currency(input.plannedRaiseThisPeriod)
    },
    recommended_actions:
      input.recommendations.length > 0 ? input.recommendations : WEEKLY_FINANCE_MEMO_CONTENT.defaultActions,
    closing: UNIVERSAL_CLOSING_BLOCK
  };
}

/**
 * @param {{weeklyRaiseGoal: number, topAsks: string[], followUp: string, eventPriorities: string[], oneRisk: string, fundingStatus?: string}} input
 */
export function composeCandidateBrief(input) {
  return {
    title: CANDIDATE_BRIEF_CONTENT.title,
    opening: CANDIDATE_BRIEF_CONTENT.opening,
    preface: REPORT_PREFACE_VARIANTS.candidateFacing,
    current_position:
      CANDIDATE_BRIEF_CONTENT.currentPositionTemplate
        .replace("[path_status]", input.fundingStatus ?? "Watch")
        .replace("[near_term_goal]", currency(input.weeklyRaiseGoal)),
    candidate_priorities:
      input.topAsks.length > 0
        ? [`Make these asks first: ${input.topAsks.join(", ")}`].concat(CANDIDATE_BRIEF_CONTENT.priorities)
        : CANDIDATE_BRIEF_CONTENT.priorities,
    follow_up_focus: input.followUp,
    event_priorities: input.eventPriorities,
    one_risk: input.oneRisk,
    tone_variants: CANDIDATE_BRIEF_CONTENT.toneVariants,
    closing: UNIVERSAL_CLOSING_BLOCK
  };
}

/**
 * @param {{committeeTarget: number, topProspects: string[], unresolvedCommitments: string[], eventSupportStatus: string, accountabilityNotes: string[]}} input
 */
export function composeFinanceCommitteeMemo(input) {
  return {
    title: FINANCE_COMMITTEE_BRIEF_CONTENT.title,
    opening: FINANCE_COMMITTEE_BRIEF_CONTENT.intro,
    committee_progress: FINANCE_COMMITTEE_BRIEF_CONTENT.accountabilityTemplate,
    committee_target_for_period: currency(input.committeeTarget),
    assigned_prospects: input.topProspects,
    unresolved_commitments: input.unresolvedCommitments,
    event_program_status: input.eventSupportStatus,
    action_header: FINANCE_COMMITTEE_BRIEF_CONTENT.actionHeader,
    committee_actions:
      input.accountabilityNotes.length > 0
        ? input.accountabilityNotes
        : FINANCE_COMMITTEE_BRIEF_CONTENT.actions,
    closing: UNIVERSAL_CLOSING_BLOCK
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
    budget_realism: BUDGET_HEALTH_REPORT_CONTENT.budgetRealismTemplate.replace(
      "[realism_status]",
      input.status
    ),
    timing_pressure: BUDGET_HEALTH_REPORT_CONTENT.timingPressureTemplate
      .replace("[pressure_window]", input.spendingPressureNote)
      .replace("[safely_fundable_summary]", input.safeCommitments.join(", "))
      .replace("[less_secure_summary]", input.unsafeCommitments.join(", ")),
    field_affordability: input.fieldAffordabilityNote,
    safe_to_proceed: input.safeCommitments,
    do_not_proceed_yet: input.unsafeCommitments,
    recommended_actions: input.decisionPoints,
    closing: UNIVERSAL_CLOSING_BLOCK
  };
}

/**
 * @param {{donorSummary: string, interpretation: string}} input
 */
export function composeDonorIntelligenceMemo(input) {
  return {
    title: DONOR_INTELLIGENCE_MEMO_CONTENT.title,
    opening: DONOR_INTELLIGENCE_MEMO_CONTENT.opening,
    geography: DONOR_INTELLIGENCE_MEMO_CONTENT.geographyTemplate.replace(
      "[top_geo_summary]",
      input.donorSummary
    ),
    occupation_and_industry: DONOR_INTELLIGENCE_MEMO_CONTENT.occupationTemplate.replace(
      "[top_occupation_summary]",
      input.interpretation
    ),
    concentration_read: DONOR_INTELLIGENCE_MEMO_CONTENT.concentrationTemplate
      .replace("[concentration_read]", input.interpretation),
    closing: UNIVERSAL_CLOSING_BLOCK
  };
}

/**
 * @param {{riskList: string[]}} input
 */
export function composeLeadershipRiskReport(input) {
  return {
    title: LEADERSHIP_RISK_REPORT_CONTENT.title,
    opening: LEADERSHIP_RISK_REPORT_CONTENT.opening,
    risks: input.riskList,
    risk_template: LEADERSHIP_RISK_REPORT_CONTENT.riskTemplate,
    closing: LEADERSHIP_RISK_REPORT_CONTENT.closingVariants[0]
  };
}
