export const timelinePage = {
  id: "timeline",
  title: "Spend Timeline",
  render(state) {
    return {
      spend_timeline_snapshot: state.snapshots.spendTimeline ?? null,
      note: "This view consumes the canonical spend timeline snapshot and does not recompute line math."
    };
  }
};
