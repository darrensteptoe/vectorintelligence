import { EMPTY_STATES } from "../../core/contracts/uiCopy.js";

export const risksPage = {
  id: "risks",
  title: "Risks",
  render(state) {
    return {
      active_risks: state.snapshots.riskFlags,
      empty_state: state.snapshots.riskFlags.length === 0 ? EMPTY_STATES.risks : null
    };
  }
};
