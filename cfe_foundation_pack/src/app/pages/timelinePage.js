import { EMPTY_STATES, SPEND_TIMELINE_SURFACE, TOOLTIP_LIBRARY } from "../../core/contracts/uiCopy.js";

/**
 * @param {import('../../core/contracts/types.js').SpendTimelineSnapshot | null} snapshot
 * @param {string} reserveStatus
 */
function warningCallout(snapshot, reserveStatus) {
  if (!snapshot) {
    return null;
  }

  let title = SPEND_TIMELINE_SURFACE.warningCallout.titleOptions[2];

  if (reserveStatus === "At Risk") {
    title = SPEND_TIMELINE_SURFACE.warningCallout.titleOptions[0];
  } else if (snapshot.cash_stress_periods.length > 0) {
    title = SPEND_TIMELINE_SURFACE.warningCallout.titleOptions[1];
  }

  return {
    title,
    body: SPEND_TIMELINE_SURFACE.warningCallout.body
  };
}

export const timelinePage = {
  id: "spend-timeline",
  title: "Spend Timeline",
  render(state) {
    const snapshot = state.snapshots.spendTimeline;

    return {
      header: SPEND_TIMELINE_SURFACE.header,
      body: SPEND_TIMELINE_SURFACE.body,
      timeline_cards: SPEND_TIMELINE_SURFACE.timelineCards,
      timeline_card_helper: SPEND_TIMELINE_SURFACE.timelineCardHelper,
      interpretation_panel: SPEND_TIMELINE_SURFACE.interpretationPanel,
      spend_timeline_snapshot: snapshot ?? null,
      warning_callout: warningCallout(snapshot, state.snapshots.reserveStatus),
      tooltips: {
        reserve_floor: TOOLTIP_LIBRARY.reserveFloor,
        checkpoint_target: TOOLTIP_LIBRARY.checkpointTarget,
        modeled_value: TOOLTIP_LIBRARY.modeledValue
      },
      empty_state:
        snapshot == null ? SPEND_TIMELINE_SURFACE.emptyState : EMPTY_STATES.timeline
    };
  }
};
