import {
  BUDGET_PLAN_STATUSES,
  CORE_PATH_STATUSES,
  FIELD_FUNDING_STATUSES,
  RESERVE_STATUSES,
  SCENARIO_STATES,
  isOneOf
} from "../contracts/enums.js";
import { makeId, nowIso } from "../contracts/types.js";

/**
 * @param {Array<{id: string, label: string, pass: boolean, details: string}>} checks
 */
function summarizeChecks(checks) {
  const failed = checks.filter((check) => check.pass === false);
  return {
    total: checks.length,
    passed: checks.length - failed.length,
    failed: failed.length,
    overall_status: failed.length === 0 ? "PASS" : "FAIL",
    failing_check_ids: failed.map((check) => check.id)
  };
}

/**
 * @param {{accepted?: number, rejected?: number, flagged?: number}} input
 */
export function summarizeImportResult(input) {
  const accepted = typeof input.accepted === "number" ? input.accepted : 0;
  const rejected = typeof input.rejected === "number" ? input.rejected : 0;
  const flagged = typeof input.flagged === "number" ? input.flagged : 0;
  const total = accepted + rejected + flagged;

  return {
    accepted,
    rejected,
    flagged,
    total,
    status: rejected > 0 ? "Needs Review" : flagged > 0 ? "Review Flagged" : "Clean"
  };
}

/**
 * @param {import('../../state/store.js').CfeState} state
 */
export function runContractChecks(state) {
  const funding = state.snapshots.fundingRequirement;
  const weeklyMemo = state.snapshots.reports.weeklyFinanceMemo;
  const budgetPlan = state.budgetPlan;
  const cfeBridge = state.bridge.cfeSnapshot;
  const fpeBridge = state.bridge.fpeSnapshot;

  /** @type {Array<{id: string, label: string, pass: boolean, details: string}>} */
  const checks = [];

  const scenarioContextPresent = typeof state.scenarioId === "string" && state.scenarioId.length > 0;
  checks.push({
    id: "scenario_context_present",
    label: "Scenario context present",
    pass: scenarioContextPresent,
    details: scenarioContextPresent
      ? `Active scenario: ${state.scenarioId}`
      : "Missing active scenario ID."
  });

  const scenarioStateValid = isOneOf(state.scenarioState, SCENARIO_STATES);
  checks.push({
    id: "scenario_state_valid",
    label: "Scenario state is valid",
    pass: scenarioStateValid,
    details: scenarioStateValid
      ? `Scenario state is ${state.scenarioState}.`
      : `Scenario state is invalid: ${state.scenarioState}`
  });

  const budgetStatusValid = budgetPlan == null || isOneOf(budgetPlan.status, BUDGET_PLAN_STATUSES);
  checks.push({
    id: "budget_status_valid",
    label: "Budget plan status is valid when present",
    pass: budgetStatusValid,
    details: budgetStatusValid
      ? "Budget status is valid or budget is not set."
      : `Budget status is invalid: ${budgetPlan.status}`
  });

  checks.push({
    id: "funding_snapshot_present",
    label: "Funding snapshot present for path-dependent pages",
    pass: funding != null,
    details:
      funding != null
        ? `Funding snapshot generated at ${funding.generated_at}.`
        : "Funding snapshot missing; path/report surfaces may be partial."
  });

  const fundingScenarioMatch = funding == null || funding.scenario_id === state.scenarioId;
  checks.push({
    id: "funding_scenario_match",
    label: "Funding snapshot scenario matches active scenario",
    pass: fundingScenarioMatch,
    details: fundingScenarioMatch
      ? "Funding snapshot scenario is aligned."
      : `Funding snapshot scenario (${funding.scenario_id}) differs from active scenario (${state.scenarioId}).`
  });

  const fundingPathStatusValid = funding == null || isOneOf(funding.path_status, CORE_PATH_STATUSES);
  checks.push({
    id: "funding_path_status_valid",
    label: "Funding path status is canonical when present",
    pass: fundingPathStatusValid,
    details: fundingPathStatusValid
      ? "Funding path status is canonical."
      : `Funding path status is invalid: ${funding.path_status}`
  });

  const reserveStatusValid = isOneOf(state.snapshots.reserveStatus, RESERVE_STATUSES);
  checks.push({
    id: "reserve_status_valid",
    label: "Reserve status is canonical",
    pass: reserveStatusValid,
    details: reserveStatusValid
      ? "Reserve status is canonical."
      : `Reserve status is invalid: ${state.snapshots.reserveStatus}`
  });

  const bridgeScenarioMatch =
    (fpeBridge == null || fpeBridge.scenario_id === state.scenarioId) &&
    (cfeBridge == null || cfeBridge.scenario_id === state.scenarioId);
  checks.push({
    id: "bridge_scenario_match",
    label: "Bridge snapshot scenarios match active scenario",
    pass: bridgeScenarioMatch,
    details: bridgeScenarioMatch
      ? "Bridge scenarios are aligned or absent."
      : "One or more bridge snapshots reference a different scenario."
  });

  const bridgeStatusValid =
    cfeBridge == null ||
    (isOneOf(cfeBridge.hiring_greenlight_status, FIELD_FUNDING_STATUSES) &&
      isOneOf(cfeBridge.expansion_greenlight_status, FIELD_FUNDING_STATUSES));
  checks.push({
    id: "bridge_status_valid",
    label: "Bridge funding statuses are canonical when present",
    pass: bridgeStatusValid,
    details: bridgeStatusValid
      ? "Bridge funding statuses are canonical."
      : "Bridge funding status includes a non-canonical value."
  });

  const memoPathStatus = weeklyMemo?.current_condition?.path_status;
  const canonicalPathStatus = funding?.pace_status ?? funding?.path_status;
  const reportAlignment = weeklyMemo == null || funding == null || memoPathStatus === canonicalPathStatus;
  checks.push({
    id: "report_snapshot_alignment",
    label: "Report output reuses canonical snapshot status",
    pass: reportAlignment,
    details: reportAlignment
      ? "Report status aligns with canonical snapshot."
      : "Report status diverges from canonical funding snapshot."
  });

  return {
    id: makeId("self_test"),
    generated_at: nowIso(),
    ...summarizeChecks(checks),
    checks
  };
}
