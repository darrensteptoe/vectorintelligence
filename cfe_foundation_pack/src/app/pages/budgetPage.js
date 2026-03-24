import {
  BUDGET_CATEGORY_HELPER_TEXT,
  BUDGET_PLAN_SURFACE,
  OVERVIEW_SURFACE,
  TOOLTIP_LIBRARY
} from "../../core/contracts/uiCopy.js";

export const budgetPage = {
  id: "budget-plan",
  title: "Budget Plan",
  render(state) {
    return {
      header: BUDGET_PLAN_SURFACE.header,
      subheader: BUDGET_PLAN_SURFACE.subheader,
      intro: BUDGET_PLAN_SURFACE.intro,
      budget_plan: state.budgetPlan ?? null,
      budget_lines: state.budgetLines,
      budget_summary_snapshot: state.snapshots.budgetSummary ?? null,
      line_status_labels: BUDGET_PLAN_SURFACE.lineStatusLabels,
      category_helper_text: BUDGET_CATEGORY_HELPER_TEXT,
      tooltips: {
        standardized_value: TOOLTIP_LIBRARY.standardizedValue,
        manual_override: TOOLTIP_LIBRARY.manualOverride
      },
      empty_state: state.budgetLines.length === 0 ? OVERVIEW_SURFACE.emptyState : null,
      note: "Budget totals are consumed from canonical budget summary snapshots."
    };
  }
};
