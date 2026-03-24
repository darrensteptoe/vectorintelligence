import { EMPTY_STATES } from "../../core/contracts/uiCopy.js";

export const channelsPage = {
  id: "channels",
  title: "Channels",
  render(state) {
    const channelPlan = state.channelTargetPlan ?? null;
    return {
      channel_target_plan: channelPlan,
      empty_state: channelPlan == null ? EMPTY_STATES.channels : null
    };
  }
};
