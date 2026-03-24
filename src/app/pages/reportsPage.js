import { REPORTS_SURFACE, STATE_MATRIX } from "../../core/contracts/uiCopy.js";
import {
  CANDIDATE_BRIEF_CONTENT,
  FINANCE_COMMITTEE_BRIEF_CONTENT,
  REPORT_PREFACE_VARIANTS,
  REPORT_SECTION_STRUCTURE,
  REPORT_TONE_RULES,
  WEEKLY_FINANCE_MEMO_CONTENT
} from "../../core/contracts/reportingLanguage.js";

/**
 * @param {unknown} value
 */
function isPresent(value) {
  return value == null ? false : true;
}

/**
 * @param {import('../../state/store.js').CfeState} state
 */
function reportGenerationState(state) {
  if (state.snapshots.fundingRequirement == null) {
    return STATE_MATRIX.reportGeneration.blocked;
  }

  if (state.donorGeoSummary == null || state.spendMixSummary == null) {
    return STATE_MATRIX.reportGeneration.partial;
  }

  return STATE_MATRIX.reportGeneration.ready;
}

/**
 * @param {import('../../state/store.js').CfeState} state
 */
function exportPreview(state) {
  return {
    campaign_id: state.campaignProfile?.id ?? null,
    scenario_id: state.scenarioId,
    scenario_state: state.scenarioState,
    snapshot_generated_at: state.snapshots.fundingRequirement?.generated_at ?? null,
    trust_labels: ["Reported", "Standardized", "Modeled", "Bridge-Derived"],
    circulation_ready: isPresent(state.snapshots.fundingRequirement),
    diagnostics_status: state.snapshots.diagnostics?.overall_status ?? "PENDING"
  };
}

export const reportsPage = {
  id: "reports",
  title: "Reports",
  render(state) {
    const generationState = reportGenerationState(state);

    return {
      header: REPORTS_SURFACE.header,
      body: REPORTS_SURFACE.body,
      module_intro:
        "Generate circulation-ready finance outputs that reuse canonical snapshots and preserve interpretation quality.",
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
      export_preview: exportPreview(state),
      empty_state:
        generationState === STATE_MATRIX.reportGeneration.blocked ? generationState : null
    };
  }
};
