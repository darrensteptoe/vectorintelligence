import {
  ECOSYSTEM_ALIGNMENT_RULES,
  RIGHT_RAIL_HELPER_BY_PAGE
} from "../core/contracts/manualLanguage.js";
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
  return "No elevated warning is active; continue disciplined weekly execution and protect the next checkpoint margin.";
}

/**
 * @param {string} route
 */
function helperForRoute(route) {
  return (
    RIGHT_RAIL_HELPER_BY_PAGE[route] ?? {
      rail_title: "How to read this page",
      rail_body:
        "Use this page as an operating coach: read condition, identify the exposed decision, and choose the most controllable correction.",
      good_discipline: "Prefer early correction over late rescue behavior.",
      bad_habit: "Do not confuse polished summaries with protected operating reality."
    }
  );
}

/**
 * @param {string} route
 * @param {import('../state/store.js').CfeState} state
 */
export function buildRightRail(route, state) {
  const funding = state.snapshots.fundingRequirement;
  const diagnostics = state.snapshots.diagnostics;
  const helper = helperForRoute(route);

  return {
    route,
    section_order: RIGHT_RAIL_SECTIONS,
    coach_block: {
      title: helper.rail_title,
      body: helper.rail_body,
      good_discipline: helper.good_discipline,
      bad_habit: helper.bad_habit
    },
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
      "Unknown classifications stay visible instead of being smoothed away.",
      "Bridge exchange remains snapshot-based, validated, and versioned."
    ],
    interpretation: HARDENING_ACCEPTANCE_FOCUS,
    ecosystem_alignment: ECOSYSTEM_ALIGNMENT_RULES,
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
