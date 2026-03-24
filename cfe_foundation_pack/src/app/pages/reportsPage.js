import {
  EMPTY_STATES,
  REPORTS_SURFACE,
  STATE_MATRIX
} from "../../core/contracts/uiCopy.js";
import {
  CANDIDATE_BRIEF_CONTENT,
  FINANCE_COMMITTEE_BRIEF_CONTENT,
  REPORT_PREFACE_VARIANTS,
  REPORT_SECTION_STRUCTURE,
  REPORT_TONE_RULES,
  WEEKLY_FINANCE_MEMO_CONTENT
} from "../../core/contracts/reportingLanguage.js";

/**
 * @param {import('../../state/store.js').CfeState} state
 */
function reportGenerationState(state) {
  if (!state.snapshots.fundingRequirement) {
    return STATE_MATRIX.reportGeneration.blocked;
  }

  if (!state.donorGeoSummary || !state.spendMixSummary) {
    return STATE_MATRIX.reportGeneration.partial;
  }

  return STATE_MATRIX.reportGeneration.ready;
}

export const reportsPage = {
  id: "reports",
  title: "Reports",
  render(state) {
    const generationState = reportGenerationState(state);

    return {
      header: REPORTS_SURFACE.header,
      body: REPORTS_SURFACE.body,
      report_picker_descriptions: REPORTS_SURFACE.reportPickerDescriptions,
      report_generation_state: generationState,
      section_structure: REPORT_SECTION_STRUCTURE,
      tone_rules: REPORT_TONE_RULES,
      preface_variants: REPORT_PREFACE_VARIANTS,
      preview_language: {
        weekly_memo: WEEKLY_FINANCE_MEMO_CONTENT.executiveSummaryTemplates,
        candidate_brief: CANDIDATE_BRIEF_CONTENT.opening,
        committee_memo: FINANCE_COMMITTEE_BRIEF_CONTENT.intro
      },
      reports: {
        weekly_finance_memo: state.snapshots.reports.weeklyFinanceMemo ?? null,
        candidate_brief: state.snapshots.reports.candidateBrief ?? null,
        committee_memo: state.snapshots.reports.financeCommitteeMemo ?? null,
        leadership_budget_health: state.snapshots.reports.leadershipMemo ?? null
      },
      empty_state:
        generationState === STATE_MATRIX.reportGeneration.blocked
          ? generationState
          : REPORTS_SURFACE.emptyState ?? EMPTY_STATES.risks
    };
  }
};
