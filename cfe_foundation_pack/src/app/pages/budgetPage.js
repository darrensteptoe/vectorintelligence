import { EMPTY_STATES } from "../../core/contracts/uiCopy.js";

export const budgetPage = {
  id: "budget",
  title: "Budget",
  render(state) {
    return {
      budget_plan: state.budgetPlan ?? null,
      budget_line_count: state.budgetLines.length,
      budget_summary: state.snapshots.budgetSummary ?? null,
      empty_state: state.budgetLines.length === 0 ? EMPTY_STATES.budget : null,
      note: "Rendered from canonical budget summary snapshot."
    };
  }
};
