import {
  GLOBAL_INFO_BANNER,
  OVERVIEW_SURFACE,
  STATE_MATRIX,
  STATUS_CHIP_HELPER_COPY,
  TOOLTIP_LIBRARY
} from "../../core/contracts/uiCopy.js";

/**
 * @param {string | undefined} pathStatus
 * @param {string | undefined} reserveStatus
 */
function overviewState(pathStatus, reserveStatus) {
  if (pathStatus === "Off Path" || reserveStatus === "At Risk") {
    return STATE_MATRIX.overview.offPath;
  }
  if (pathStatus === "On Path" && reserveStatus === "Healthy") {
    return STATE_MATRIX.overview.healthy;
  }
  return STATE_MATRIX.overview.watch;
}

export const overviewPage = {
  id: "overview",
  title: "Overview",
  render(state) {
    const funding = state.snapshots.fundingRequirement;
    const budget = state.snapshots.budgetSummary;

    return {
      header_block: OVERVIEW_SURFACE.headerBlock,
      global_info_banner: GLOBAL_INFO_BANNER,
      hero_cards: {
        total_campaign_budget: {
          ...OVERVIEW_SURFACE.heroCards.totalCampaignBudget,
          value: budget?.total_planned_budget ?? null,
          trust_label: "Modeled"
        },
        total_raise_required: {
          ...OVERVIEW_SURFACE.heroCards.totalRaiseRequired,
          value: funding?.total_raise_target ?? null,
          trust_label: "Modeled"
        },
        current_funding_status: {
          ...OVERVIEW_SURFACE.heroCards.currentFundingStatus,
          path_status: funding?.path_status ?? null,
          funding_risk_level: funding?.funding_risk_level ?? null
        },
        reserve_status: {
          ...OVERVIEW_SURFACE.heroCards.reserveStatus,
          reserve_status: state.snapshots.reserveStatus,
          reserve_floor: funding?.reserve_floor ?? null
        },
        field_funding_signal: {
          ...OVERVIEW_SURFACE.heroCards.fieldFundingSignal,
          field_funding_status: state.snapshots.fieldFundingStatus,
          funded_percent_of_field_plan: state.bridge.cfeSnapshot?.funded_percent_of_field_plan ?? null,
          trust_label: "Bridge-Derived"
        }
      },
      interpretation_panel: OVERVIEW_SURFACE.interpretationPanel,
      state_banner: overviewState(funding?.path_status, state.snapshots.reserveStatus),
      status_chip_helper_copy: STATUS_CHIP_HELPER_COPY,
      tooltips: {
        on_path: TOOLTIP_LIBRARY.onPath,
        watch: TOOLTIP_LIBRARY.watch,
        off_path: TOOLTIP_LIBRARY.offPath,
        healthy_reserve: TOOLTIP_LIBRARY.healthyReserve,
        tight_reserve: TOOLTIP_LIBRARY.tightReserve,
        at_risk_reserve: TOOLTIP_LIBRARY.atRiskReserve
      },
      empty_state: funding == null ? OVERVIEW_SURFACE.emptyState : null
    };
  }
};
