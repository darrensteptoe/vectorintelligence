export const budgetPage = {
  id: "budget",
  title: "Budget Builder",
  render(state) {
    return {
      budget_plan: state.budgetPlan ?? null,
      budget_line_count: state.budgetLines.length,
      budget_summary: state.snapshots.budgetSummary ?? null,
      note: "Rendered from canonical budget summary snapshot."
    };
  }
};
