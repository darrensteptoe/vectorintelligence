import {
  GLOBAL_EMPTY_STATES,
  OVERVIEW_SURFACE,
  TOOLTIP_LIBRARY
} from "../../core/contracts/uiCopy.js";

export const overviewPage = {
  id: "overview",
  title: "Overview",
  render(state) {
    const funding = state.snapshots.fundingRequirement;
    const budget = state.snapshots.budgetSummary;

    return {
      header: OVERVIEW_SURFACE.header,
      subheader: OVERVIEW_SURFACE.subheader,
      intro: OVERVIEW_SURFACE.intro,
      hero_cards: {
        total_campaign_budget: {
          ...OVERVIEW_SURFACE.heroCards.totalCampaignBudget,
          value: budget?.total_planned_budget ?? null,
          source_trust: "Modeled"
        },
        total_raise_required: {
          ...OVERVIEW_SURFACE.heroCards.totalRaiseRequired,
          value: funding?.total_raise_target ?? null,
          source_trust: "Modeled"
        },
        current_funding_status: {
          ...OVERVIEW_SURFACE.heroCards.currentFundingStatus,
          funding_status: funding?.funding_status ?? null,
          pace_status: funding?.pace_status ?? funding?.path_status ?? null,
          funding_risk_level: funding?.funding_risk_level ?? null
        },
        reserve_status: {
          ...OVERVIEW_SURFACE.heroCards.reserveStatus,
          reserve_status: state.snapshots.reserveStatus,
          field_funding_status: state.snapshots.fieldFundingStatus,
          active_risk_count: state.snapshots.riskFlags.length
        }
      },
      interpretation: OVERVIEW_SURFACE.interpretation,
      tooltips: {
        modeled_value: TOOLTIP_LIBRARY.modeledValue,
        standardized_value: TOOLTIP_LIBRARY.standardizedValue,
        comparable_races: TOOLTIP_LIBRARY.comparableRaces
      },
      empty_state: funding == null ? OVERVIEW_SURFACE.emptyState : null,
      benchmark_context_warning:
        state.benchmarkSet == null ? GLOBAL_EMPTY_STATES.noHistoricalData : null
    };
  }
};
