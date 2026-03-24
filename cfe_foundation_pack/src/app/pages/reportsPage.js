import { GLOBAL_EMPTY_STATES, REPORTS_SURFACE } from "../../core/contracts/uiCopy.js";
import { REPORT_SECTION_STRUCTURE, REPORT_TONE_RULES } from "../../core/contracts/reportingLanguage.js";

export const reportsPage = {
  id: "reports",
  title: "Reports",
  render(state) {
    const hasSnapshot = state.snapshots.fundingRequirement != null;

    return {
      header: REPORTS_SURFACE.header,
      subheader: REPORTS_SURFACE.subheader,
      intro: REPORTS_SURFACE.intro,
      report_list_helper: REPORTS_SURFACE.reportListHelper,
      section_structure: REPORT_SECTION_STRUCTURE,
      tone_rules: REPORT_TONE_RULES,
      reports: {
        weekly_finance_memo: state.snapshots.reports.weeklyFinanceMemo ?? null,
        candidate_brief: state.snapshots.reports.candidateBrief ?? null,
        committee_memo: state.snapshots.reports.financeCommitteeMemo ?? null,
        budget_health_report: state.snapshots.reports.leadershipMemo ?? null
      },
      empty_state: hasSnapshot ? null : GLOBAL_EMPTY_STATES.noReportContext,
      note: "Report outputs are generated from canonical snapshots to keep numbers and language aligned."
    };
  }
};
