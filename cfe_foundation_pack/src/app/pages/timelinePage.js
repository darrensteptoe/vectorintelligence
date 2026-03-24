import { SPEND_TIMELINE_SURFACE, TOOLTIP_LIBRARY } from "../../core/contracts/uiCopy.js";

export const timelinePage = {
  id: "spend-timeline",
  title: "Spend Timeline",
  render(state) {
    return {
      header: SPEND_TIMELINE_SURFACE.header,
      subheader: SPEND_TIMELINE_SURFACE.subheader,
      intro: SPEND_TIMELINE_SURFACE.intro,
      interpretation: SPEND_TIMELINE_SURFACE.interpretation,
      callouts: SPEND_TIMELINE_SURFACE.callouts,
      spend_timeline_snapshot: state.snapshots.spendTimeline ?? null,
      tooltips: {
        reserve_floor: TOOLTIP_LIBRARY.reserveFloor,
        modeled_value: TOOLTIP_LIBRARY.modeledValue
      },
      empty_state:
        state.snapshots.spendTimeline == null ? SPEND_TIMELINE_SURFACE.emptyState : null,
      note: "This view consumes canonical spend timeline snapshots and does not recompute timing math."
    };
  }
};
