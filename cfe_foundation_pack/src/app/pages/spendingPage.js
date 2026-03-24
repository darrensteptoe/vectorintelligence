import { EMPTY_STATES } from "../../core/contracts/uiCopy.js";

export const spendingPage = {
  id: "spending",
  title: "Spending",
  render(state) {
    const spendingSummary = state.spendMixSummary ?? null;
    return {
      spending_summary: spendingSummary,
      empty_state: spendingSummary == null ? EMPTY_STATES.spending : null
    };
  }
};
