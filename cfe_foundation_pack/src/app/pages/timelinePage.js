import { EMPTY_STATES } from "../../core/contracts/uiCopy.js";

export const timelinePage = {
  id: "timeline",
  title: "Timeline",
  render(state) {
    return {
      spend_timeline_snapshot: state.snapshots.spendTimeline ?? null,
      empty_state: state.snapshots.spendTimeline == null ? EMPTY_STATES.timeline : null,
      note: "This view consumes the canonical spend timeline snapshot and does not recompute line math."
    };
  }
};
