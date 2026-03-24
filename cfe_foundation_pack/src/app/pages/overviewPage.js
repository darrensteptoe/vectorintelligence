import { CORE_HELPER_TEXT, EMPTY_STATES } from "../../core/contracts/uiCopy.js";

export const overviewPage = {
  id: "overview",
  title: "Overview",
  render(state) {
    return {
      cards: {
        total_planned_budget: state.snapshots.budgetSummary?.total_planned_budget ?? null,
        current_raise_pace: state.snapshots.fundingRequirement?.path_status ?? null,
        next_checkpoint_target:
          state.snapshots.fundingRequirement?.raise_target_by_checkpoint?.before_primary ?? null,
        reserve_status: state.snapshots.reserveStatus,
        field_funding_status: state.snapshots.fieldFundingStatus,
        active_risk_count: state.snapshots.riskFlags.length
      },
      helper_text: {
        total_planned_budget: CORE_HELPER_TEXT.totalPlannedBudget,
        current_raise_pace: CORE_HELPER_TEXT.currentRaisePace,
        next_checkpoint_target: CORE_HELPER_TEXT.nextCheckpointTarget,
        reserve_status: CORE_HELPER_TEXT.reserveStatus,
        field_funding_status: CORE_HELPER_TEXT.fieldFundingStatus
      },
      empty_fallback:
        state.snapshots.fundingRequirement == null ? EMPTY_STATES.fundingPath : null
    };
  }
};
