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
import { IMPORT_EXPORT_CONTROLS, ROLE_TYPES } from "../../core/contracts/hardening.js";

/**
 * @param {unknown} value
 */
function isPresent(value) {
  return value == null ? false : true;
}

export const settingsPage = {
  id: "settings-data-imports",
  title: "Settings / Data / Imports",
  render(state) {
    return {
      header: "Settings / Data / Imports",
      app_title: APP_TITLE,
      app_subtitle: APP_SUBTITLE,
      global_info_banner: GLOBAL_INFO_BANNER,
      module_intro:
        "Control imports, exports, role-aware access, and snapshot governance without weakening canonical traceability.",
      universal_search_placeholder: UNIVERSAL_SEARCH_PLACEHOLDER,
      active_route: state.route,
      active_scenario_id: state.scenarioId,
      active_scenario_state: state.scenarioState,
      active_role: state.activeRole,
      role_options: ROLE_TYPES,
      navigation_labels: NAVIGATION_LABELS,
      status_taxonomy: GLOBAL_STATUS_LABELS,
      source_trust_labels: ["Reported", "Standardized", "Modeled", "Bridge-Derived"],
      shared_modals: SHARED_MODALS,
      status_chip_helper_copy: STATUS_CHIP_HELPER_COPY,
      ui_strings: UI_STRINGS,
      import_export_controls: IMPORT_EXPORT_CONTROLS,
      bridge_status: {
        has_fpe_snapshot: isPresent(state.bridge.fpeSnapshot),
        has_cfe_snapshot: isPresent(state.bridge.cfeSnapshot),
        fpe_snapshot_state: state.bridgeSnapshotState,
        cfe_snapshot_scenario: state.bridge.cfeSnapshot?.scenario_id ?? null
      },
      diagnostics: state.snapshots.diagnostics,
      tooltips: TOOLTIP_LIBRARY
    };
  }
};
