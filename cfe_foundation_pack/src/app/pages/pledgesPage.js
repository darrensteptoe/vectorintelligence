import { EMPTY_STATES } from "../../core/contracts/uiCopy.js";

export const pledgesPage = {
  id: "pledges",
  title: "Pledges",
  render(state) {
    const pledges = state.pledges ?? [];
    return {
      pledge_count: pledges.length,
      pledges,
      empty_state: pledges.length === 0 ? EMPTY_STATES.pledges : null
    };
  }
};
