import {
  GLOBAL_STATUS_LABELS,
  NAVIGATION_LABELS,
  TOOLTIP_LIBRARY
} from "../../core/contracts/uiCopy.js";

export const settingsPage = {
  id: "settings",
  title: "Settings",
  render(state) {
    return {
      header: "Settings",
      subheader: "Scenario controls, snapshot context, and surface conventions.",
      intro:
        "Use this page to keep scenario assumptions explicit and preserve trust labels across all CFE surfaces.",
      active_route: state.route,
      active_scenario_id: state.scenarioId,
      navigation_labels: NAVIGATION_LABELS,
      status_taxonomy: GLOBAL_STATUS_LABELS,
      source_trust_labels: ["Reported", "Standardized", "Modeled"],
      bridge_status: {
        has_fpe_snapshot: state.bridge.fpeSnapshot != null,
        has_cfe_snapshot: state.bridge.cfeSnapshot != null
      },
      tooltips: {
        modeled_value: TOOLTIP_LIBRARY.modeledValue,
        standardized_value: TOOLTIP_LIBRARY.standardizedValue,
        manual_override: TOOLTIP_LIBRARY.manualOverride
      }
    };
  }
};
