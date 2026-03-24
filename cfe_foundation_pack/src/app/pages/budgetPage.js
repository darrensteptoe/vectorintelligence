import {
  BUDGET_CATEGORY_HELPER_TEXT,
  BUDGET_PLAN_SURFACE,
  EMPTY_STATES,
  STATE_MATRIX,
  TOOLTIP_LIBRARY
} from "../../core/contracts/uiCopy.js";

/**
 * @param {Record<string, unknown> | null} budgetSummary
 * @param {import('../../core/contracts/types.js').SpendTimelineSnapshot | null} timeline
 */
function budgetState(budgetSummary, timeline) {
  if (!budgetSummary) {
    return null;
  }

  const total = typeof budgetSummary.total_planned_budget === "number" ? budgetSummary.total_planned_budget : 0;
  const optional = typeof budgetSummary.optional_budget === "number" ? budgetSummary.optional_budget : 0;
  const optionalShare = total > 0 ? optional / total : 0;

  if (timeline && Array.isArray(timeline.cash_stress_periods) && timeline.cash_stress_periods.length > 0) {
    return STATE_MATRIX.budgetPlan.frontLoaded;
  }

  if (optionalShare >= 0.35) {
    return STATE_MATRIX.budgetPlan.optionalPressure;
  }

  return STATE_MATRIX.budgetPlan.disciplined;
}

export const budgetPage = {
  id: "budget-plan",
  title: "Budget Plan",
  render(state) {
    return {
      header: BUDGET_PLAN_SURFACE.header,
      body: BUDGET_PLAN_SURFACE.body,
      top_helper_banner: BUDGET_PLAN_SURFACE.topHelperBanner,
      budget_line_drawer_fields: BUDGET_PLAN_SURFACE.budgetLineDrawerFields,
      budget_line_status_chips: BUDGET_PLAN_SURFACE.lineStatusChips,
      budget_plan_interpretation_box: BUDGET_PLAN_SURFACE.interpretationBox,
      budget_plan: state.budgetPlan ?? null,
      budget_lines: state.budgetLines,
      budget_summary_snapshot: state.snapshots.budgetSummary ?? null,
      category_helper_text: BUDGET_CATEGORY_HELPER_TEXT,
      state_banner: budgetState(state.snapshots.budgetSummary, state.snapshots.spendTimeline),
      tooltips: {
        modeled_value: TOOLTIP_LIBRARY.modeledValue,
        standardized_value: TOOLTIP_LIBRARY.standardizedValue,
        manual_override: TOOLTIP_LIBRARY.manualOverride
      },
      empty_state: state.budgetLines.length === 0 ? BUDGET_PLAN_SURFACE.emptyState : EMPTY_STATES.budget
    };
  }
};
