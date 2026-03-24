import {
  BUDGET_CATEGORY_HELPER_TEXT,
  BUDGET_PLAN_SURFACE,
  STATE_MATRIX,
  TOOLTIP_LIBRARY
} from "../../core/contracts/uiCopy.js";

/**
 * @param {Record<string, unknown> | null} budgetSummary
 * @param {import('../../core/contracts/types.js').SpendTimelineSnapshot | null} timeline
 */
function budgetState(budgetSummary, timeline) {
  if (budgetSummary == null) {
    return null;
  }

  const total = typeof budgetSummary.total_planned_budget === "number" ? budgetSummary.total_planned_budget : 0;
  const optional = typeof budgetSummary.optional_budget === "number" ? budgetSummary.optional_budget : 0;
  const optionalShare = total > 0 ? optional / total : 0;

  const hasStressPeriods =
    timeline == null
      ? false
      : Array.isArray(timeline.cash_stress_periods) && timeline.cash_stress_periods.length > 0;

  if (hasStressPeriods) {
    return STATE_MATRIX.budgetPlan.frontLoaded;
  }

  if (optionalShare >= 0.35) {
    return STATE_MATRIX.budgetPlan.optionalPressure;
  }

  return STATE_MATRIX.budgetPlan.disciplined;
}

export const budgetPage = {
  id: "budget",
  title: "Budget",
  render(state) {
    return {
      header: "Budget",
      body: BUDGET_PLAN_SURFACE.body,
      module_intro:
        "Define the full campaign budget with disciplined separation between required and optional commitments.",
      top_helper_banner: BUDGET_PLAN_SURFACE.topHelperBanner,
      budget_line_drawer_fields: BUDGET_PLAN_SURFACE.budgetLineDrawerFields,
      budget_line_status_chips: BUDGET_PLAN_SURFACE.lineStatusChips,
      budget_plan_interpretation_box: BUDGET_PLAN_SURFACE.interpretationBox,
      workflow_guidance: [
        "Start with required lines before optional enhancements.",
        "Attach timing assumptions to every major line.",
        "Mark bridge-derived field lines explicitly."
      ],
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
      empty_state: state.budgetLines.length === 0 ? BUDGET_PLAN_SURFACE.emptyState : null
    };
  }
};
