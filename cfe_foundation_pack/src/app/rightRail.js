import { HARDENING_ACCEPTANCE_FOCUS, RIGHT_RAIL_SECTIONS } from "../core/contracts/hardening.js";

/**
 * @param {unknown} value
 */
function isPresent(value) {
  return value == null ? false : true;
}

/**
 * @param {import('../state/store.js').CfeState} state
 */
function topWarnings(state) {
  return state.snapshots.riskFlags.slice(0, 3).map((flag) => ({
    severity: flag.severity,
    title: flag.title,
    action: flag.recommended_action
  }));
}

/**
 * @param {import('../state/store.js').CfeState} state
 */
function nextAction(state) {
  if (state.snapshots.riskFlags.length > 0) {
    return state.snapshots.riskFlags[0].recommended_action;
  }
  if (state.snapshots.reports.weeklyFinanceMemo?.recommended_actions?.[0]) {
    return state.snapshots.reports.weeklyFinanceMemo.recommended_actions[0];
  }
  return "No elevated warning is active; continue disciplined weekly execution and snapshot review.";
}

/**
 * @param {string} route
 * @param {import('../state/store.js').CfeState} state
 */
export function buildRightRail(route, state) {
  const funding = state.snapshots.fundingRequirement;
  const diagnostics = state.snapshots.diagnostics;

  return {
    route,
    section_order: RIGHT_RAIL_SECTIONS,
    current_state: {
      scenario_id: state.scenarioId,
      scenario_state: state.scenarioState,
      path_status: funding?.pace_status ?? funding?.path_status ?? null,
      reserve_status: state.snapshots.reserveStatus,
      field_funding_status: state.snapshots.fieldFundingStatus
    },
    warnings: topWarnings(state),
    assumptions: [
      "Canonical engine values are rendered from stored snapshots.",
      "Unknown classifications remain visible and are not auto-hidden.",
      "Bridge exchange remains snapshot-based and versioned."
    ],
    interpretation: HARDENING_ACCEPTANCE_FOCUS,
    next_action: nextAction(state),
    snapshot_context: {
      has_budget_summary: isPresent(state.snapshots.budgetSummary),
      has_spend_timeline: isPresent(state.snapshots.spendTimeline),
      has_funding_snapshot: isPresent(state.snapshots.fundingRequirement),
      has_bridge_snapshot: isPresent(state.bridge.cfeSnapshot),
      diagnostics_status: diagnostics?.overall_status ?? "PENDING"
    }
  };
}
