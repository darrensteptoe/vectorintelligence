import { deriveFieldFundingStatus } from "../engine/funding.js";
import { makeId, nowIso, roundMoney } from "../contracts/types.js";
import {
  CFE_SNAPSHOT_SCHEMA_VERSION,
  assertValidCfeFundingStatusSnapshot,
  assertValidFpeBudgetDemandSnapshot
} from "./contracts.js";

/**
 * @param {string | Record<string, unknown>} raw
 * @returns {import('../contracts/types.js').FPEBudgetDemandSnapshot}
 */
export function importFpeBudgetDemandSnapshot(raw) {
  const parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
  return assertValidFpeBudgetDemandSnapshot(parsed);
}

/**
 * @param {{
 *   campaignId: string,
 *   officeId: string,
 *   scenarioId: string,
 *   selectedFieldPlanCost: number,
 *   availableFieldFunding: number,
 *   reserveStatus: string,
 *   fundingRiskLevel: string,
 *   notes?: string
 * }} input
 * @returns {import('../contracts/types.js').CFEFundingStatusSnapshot}
 */
export function exportCfeFundingStatusSnapshot(input) {
  const fundedPercent =
    input.selectedFieldPlanCost <= 0
      ? 1
      : Math.max(0, Math.min(1, input.availableFieldFunding / input.selectedFieldPlanCost));

  const fieldStatus = deriveFieldFundingStatus(input.reserveStatus, fundedPercent);

  const snapshot = {
    snapshot_id: makeId("cfe_status"),
    schema_version: CFE_SNAPSHOT_SCHEMA_VERSION,
    campaign_id: input.campaignId,
    office_id: input.officeId,
    scenario_id: input.scenarioId,
    created_at: nowIso(),
    selected_field_plan_cost: roundMoney(input.selectedFieldPlanCost),
    funded_percent_of_field_plan: roundMoney(fundedPercent),
    reserve_status: input.reserveStatus,
    hiring_greenlight_status: fieldStatus,
    expansion_greenlight_status: fieldStatus,
    funding_risk_level: input.fundingRiskLevel,
    notes: input.notes
  };

  return assertValidCfeFundingStatusSnapshot(snapshot);
}
