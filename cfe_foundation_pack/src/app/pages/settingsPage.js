import {
  APP_SUBTITLE,
  APP_TITLE,
  GLOBAL_INFO_BANNER,
  GLOBAL_STATUS_LABELS,
  NAVIGATION_LABELS,
  SHARED_MODALS,
  STATUS_CHIP_HELPER_COPY,
  TOOLTIP_LIBRARY,
  UI_STRINGS,
  UNIVERSAL_SEARCH_PLACEHOLDER
} from "../../core/contracts/uiCopy.js";

export const settingsPage = {
  id: "settings",
  title: "Settings",
  render(state) {
    return {
      app_title: APP_TITLE,
      app_subtitle: APP_SUBTITLE,
      global_info_banner: GLOBAL_INFO_BANNER,
      universal_search_placeholder: UNIVERSAL_SEARCH_PLACEHOLDER,
      active_route: state.route,
      active_scenario_id: state.scenarioId,
      navigation_labels: NAVIGATION_LABELS,
      status_taxonomy: GLOBAL_STATUS_LABELS,
      source_trust_labels: ["Reported", "Standardized", "Modeled", "Bridge-Derived"],
      shared_modals: SHARED_MODALS,
      status_chip_helper_copy: STATUS_CHIP_HELPER_COPY,
      ui_strings: UI_STRINGS,
      bridge_status: {
        has_fpe_snapshot: state.bridge.fpeSnapshot != null,
        has_cfe_snapshot: state.bridge.cfeSnapshot != null
      },
      tooltips: TOOLTIP_LIBRARY
    };
  }
};
