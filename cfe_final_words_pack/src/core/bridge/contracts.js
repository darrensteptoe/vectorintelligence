import { isIsoDateLike } from "../contracts/types.js";

export const FPE_SNAPSHOT_SCHEMA_VERSION = "1.0.0";
export const CFE_SNAPSHOT_SCHEMA_VERSION = "1.0.0";

/**
 * @param {unknown} value
 * @returns {value is Record<string, number>}
 */
function isScheduleRecord(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }

  for (const [key, amount] of Object.entries(value)) {
    if (!/^\d{4}-\d{2}$/.test(key)) {
      return false;
    }
    if (typeof amount !== "number" || !Number.isFinite(amount) || amount < 0) {
      return false;
    }
  }

  return true;
}

/**
 * @param {unknown} value
 * @returns {value is string}
 */
function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

/**
 * @param {unknown} candidate
 * @returns {{ok: true, value: import('../contracts/types.js').FPEBudgetDemandSnapshot} | {ok: false, errors: string[]}}
 */
export function validateFpeBudgetDemandSnapshot(candidate) {
  /** @type {string[]} */
  const errors = [];

  if (!candidate || typeof candidate !== "object" || Array.isArray(candidate)) {
    return { ok: false, errors: ["Snapshot must be a non-null object."] };
  }

  /** @type {Record<string, unknown>} */
  const input = candidate;

  if (!isNonEmptyString(input.snapshot_id)) {
    errors.push("snapshot_id is required.");
  }
  if (input.schema_version !== FPE_SNAPSHOT_SCHEMA_VERSION) {
    errors.push(`schema_version must be ${FPE_SNAPSHOT_SCHEMA_VERSION}.`);
  }
  if (!isNonEmptyString(input.campaign_id)) {
    errors.push("campaign_id is required.");
  }
  if (!isNonEmptyString(input.office_id)) {
    errors.push("office_id is required.");
  }
  if (!isNonEmptyString(input.scenario_id)) {
    errors.push("scenario_id is required.");
  }
  if (!isIsoDateLike(input.created_at)) {
    errors.push("created_at must be ISO date-like.");
  }
  if (typeof input.total_projected_field_cost !== "number" || input.total_projected_field_cost < 0) {
    errors.push("total_projected_field_cost must be a non-negative number.");
  }
  if (!isScheduleRecord(input.monthly_field_cost_schedule)) {
    errors.push("monthly_field_cost_schedule must be a YYYY-MM numeric record.");
  }
  if (!isScheduleRecord(input.staffing_cost_schedule)) {
    errors.push("staffing_cost_schedule must be a YYYY-MM numeric record.");
  }
  if (!Array.isArray(input.field_spend_milestones)) {
    errors.push("field_spend_milestones must be an array.");
  }
  if (!isNonEmptyString(input.peak_field_spend_month) || !/^\d{4}-\d{2}$/.test(input.peak_field_spend_month)) {
    errors.push("peak_field_spend_month must be YYYY-MM.");
  }

  const allowedConfidence = new Set(["Stable", "Moderate uncertainty", "High uncertainty"]);
  if (!isNonEmptyString(input.field_confidence_band) || !allowedConfidence.has(input.field_confidence_band)) {
    errors.push("field_confidence_band must be one of: Stable, Moderate uncertainty, High uncertainty.");
  }

  if (isScheduleRecord(input.monthly_field_cost_schedule) && isNonEmptyString(input.peak_field_spend_month)) {
    if (!(input.peak_field_spend_month in input.monthly_field_cost_schedule)) {
      errors.push("peak_field_spend_month must exist in monthly_field_cost_schedule.");
    }
  }

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    value: /** @type {import('../contracts/types.js').FPEBudgetDemandSnapshot} */ (candidate)
  };
}

/**
 * @param {unknown} candidate
 * @returns {{ok: true, value: import('../contracts/types.js').CFEFundingStatusSnapshot} | {ok: false, errors: string[]}}
 */
export function validateCfeFundingStatusSnapshot(candidate) {
  /** @type {string[]} */
  const errors = [];

  if (!candidate || typeof candidate !== "object" || Array.isArray(candidate)) {
    return { ok: false, errors: ["Snapshot must be a non-null object."] };
  }

  /** @type {Record<string, unknown>} */
  const input = candidate;

  const requiredStrings = [
    "snapshot_id",
    "campaign_id",
    "office_id",
    "scenario_id",
    "reserve_status",
    "hiring_greenlight_status",
    "expansion_greenlight_status",
    "funding_risk_level"
  ];

  for (const key of requiredStrings) {
    if (!isNonEmptyString(input[key])) {
      errors.push(`${key} is required.`);
    }
  }

  if (input.schema_version !== CFE_SNAPSHOT_SCHEMA_VERSION) {
    errors.push(`schema_version must be ${CFE_SNAPSHOT_SCHEMA_VERSION}.`);
  }

  if (!isIsoDateLike(input.created_at)) {
    errors.push("created_at must be ISO date-like.");
  }

  if (
    typeof input.selected_field_plan_cost !== "number" ||
    !Number.isFinite(input.selected_field_plan_cost) ||
    input.selected_field_plan_cost < 0
  ) {
    errors.push("selected_field_plan_cost must be a non-negative number.");
  }

  if (
    typeof input.funded_percent_of_field_plan !== "number" ||
    !Number.isFinite(input.funded_percent_of_field_plan) ||
    input.funded_percent_of_field_plan < 0 ||
    input.funded_percent_of_field_plan > 1
  ) {
    errors.push("funded_percent_of_field_plan must be a number between 0 and 1.");
  }

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    value: /** @type {import('../contracts/types.js').CFEFundingStatusSnapshot} */ (candidate)
  };
}

/**
 * @param {unknown} candidate
 * @returns {import('../contracts/types.js').FPEBudgetDemandSnapshot}
 */
export function assertValidFpeBudgetDemandSnapshot(candidate) {
  const result = validateFpeBudgetDemandSnapshot(candidate);
  if (!result.ok) {
    throw new Error(`Invalid FPEBudgetDemandSnapshot: ${result.errors.join(" ")}`);
  }
  return result.value;
}

/**
 * @param {unknown} candidate
 * @returns {import('../contracts/types.js').CFEFundingStatusSnapshot}
 */
export function assertValidCfeFundingStatusSnapshot(candidate) {
  const result = validateCfeFundingStatusSnapshot(candidate);
  if (!result.ok) {
    throw new Error(`Invalid CFEFundingStatusSnapshot: ${result.errors.join(" ")}`);
  }
  return result.value;
}
