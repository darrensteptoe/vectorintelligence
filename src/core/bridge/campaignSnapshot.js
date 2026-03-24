import { isIsoDateLike } from "../contracts/types.js";

export const CFE_CAMPAIGN_SNAPSHOT_VERSION = "1.0.0";
export const CFE_BUDGET_SNAPSHOT_VERSION = "1.0.0";
export const CFE_PATH_SNAPSHOT_VERSION = "1.0.0";

/**
 * @param {unknown} candidate
 * @returns {{ok: true, value: Record<string, unknown>} | {ok: false, errors: string[]}}
 */
export function validateCampaignSnapshot(candidate) {
  /** @type {string[]} */
  const errors = [];

  if (candidate == null || typeof candidate !== "object" || Array.isArray(candidate)) {
    return { ok: false, errors: ["Campaign snapshot must be an object."] };
  }

  /** @type {Record<string, unknown>} */
  const snapshot = candidate;

  if (snapshot.schema_version !== CFE_CAMPAIGN_SNAPSHOT_VERSION) {
    errors.push(`schema_version must be ${CFE_CAMPAIGN_SNAPSHOT_VERSION}.`);
  }

  if (typeof snapshot.campaign_id !== "string" || snapshot.campaign_id.length === 0) {
    errors.push("campaign_id is required.");
  }

  if (typeof snapshot.scenario_id !== "string" || snapshot.scenario_id.length === 0) {
    errors.push("scenario_id is required.");
  }

  if (isIsoDateLike(snapshot.generated_at) === false) {
    errors.push("generated_at must be ISO date-like.");
  }

  const requiredObjects = ["budget_summary", "spend_timeline", "funding_requirement"];
  for (const key of requiredObjects) {
    if (snapshot[key] == null || typeof snapshot[key] !== "object" || Array.isArray(snapshot[key])) {
      errors.push(`${key} must be an object.`);
    }
  }

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, value: snapshot };
}

/**
 * @param {unknown} candidate
 * @returns {{ok: true, value: Record<string, unknown>} | {ok: false, errors: string[]}}
 */
export function validateBudgetSnapshot(candidate) {
  /** @type {string[]} */
  const errors = [];

  if (candidate == null || typeof candidate !== "object" || Array.isArray(candidate)) {
    return { ok: false, errors: ["Budget snapshot must be an object."] };
  }

  /** @type {Record<string, unknown>} */
  const snapshot = candidate;

  if (snapshot.schema_version !== CFE_BUDGET_SNAPSHOT_VERSION) {
    errors.push(`schema_version must be ${CFE_BUDGET_SNAPSHOT_VERSION}.`);
  }
  if (snapshot.snapshot_type !== "budget") {
    errors.push("snapshot_type must be budget.");
  }
  if (typeof snapshot.campaign_id !== "string" || snapshot.campaign_id.length === 0) {
    errors.push("campaign_id is required.");
  }
  if (typeof snapshot.scenario_id !== "string" || snapshot.scenario_id.length === 0) {
    errors.push("scenario_id is required.");
  }
  if (isIsoDateLike(snapshot.generated_at) === false) {
    errors.push("generated_at must be ISO date-like.");
  }
  if (
    snapshot.budget_summary == null ||
    typeof snapshot.budget_summary !== "object" ||
    Array.isArray(snapshot.budget_summary)
  ) {
    errors.push("budget_summary must be an object.");
  }

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, value: snapshot };
}

/**
 * @param {unknown} candidate
 * @returns {{ok: true, value: Record<string, unknown>} | {ok: false, errors: string[]}}
 */
export function validateFundingPathSnapshot(candidate) {
  /** @type {string[]} */
  const errors = [];

  if (candidate == null || typeof candidate !== "object" || Array.isArray(candidate)) {
    return { ok: false, errors: ["Funding path snapshot must be an object."] };
  }

  /** @type {Record<string, unknown>} */
  const snapshot = candidate;

  if (snapshot.schema_version !== CFE_PATH_SNAPSHOT_VERSION) {
    errors.push(`schema_version must be ${CFE_PATH_SNAPSHOT_VERSION}.`);
  }
  if (snapshot.snapshot_type !== "funding_path") {
    errors.push("snapshot_type must be funding_path.");
  }
  if (typeof snapshot.campaign_id !== "string" || snapshot.campaign_id.length === 0) {
    errors.push("campaign_id is required.");
  }
  if (typeof snapshot.scenario_id !== "string" || snapshot.scenario_id.length === 0) {
    errors.push("scenario_id is required.");
  }
  if (isIsoDateLike(snapshot.generated_at) === false) {
    errors.push("generated_at must be ISO date-like.");
  }
  if (
    snapshot.funding_requirement == null ||
    typeof snapshot.funding_requirement !== "object" ||
    Array.isArray(snapshot.funding_requirement)
  ) {
    errors.push("funding_requirement must be an object.");
  }

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, value: snapshot };
}

/**
 * @param {Record<string, unknown>} state
 */
export function exportCampaignSnapshot(state) {
  return {
    schema_version: CFE_CAMPAIGN_SNAPSHOT_VERSION,
    campaign_id: state.campaignProfile?.id,
    scenario_id: state.scenarioId,
    generated_at: new Date().toISOString(),
    budget_summary: state.snapshots?.budgetSummary,
    spend_timeline: state.snapshots?.spendTimeline,
    funding_requirement: state.snapshots?.fundingRequirement,
    reserve_status: state.snapshots?.reserveStatus,
    risk_flags: state.snapshots?.riskFlags ?? []
  };
}

/**
 * @param {Record<string, unknown>} state
 */
export function exportBudgetSnapshot(state) {
  return {
    schema_version: CFE_BUDGET_SNAPSHOT_VERSION,
    snapshot_type: "budget",
    campaign_id: state.campaignProfile?.id,
    scenario_id: state.scenarioId,
    generated_at: new Date().toISOString(),
    budget_plan_status: state.budgetPlan?.status ?? null,
    budget_summary: state.snapshots?.budgetSummary,
    source_distinction_labels: ["Reported", "Standardized", "Modeled", "Bridge-Derived"]
  };
}

/**
 * @param {Record<string, unknown>} state
 */
export function exportFundingPathSnapshot(state) {
  return {
    schema_version: CFE_PATH_SNAPSHOT_VERSION,
    snapshot_type: "funding_path",
    campaign_id: state.campaignProfile?.id,
    scenario_id: state.scenarioId,
    generated_at: new Date().toISOString(),
    reserve_status: state.snapshots?.reserveStatus,
    field_funding_status: state.snapshots?.fieldFundingStatus,
    funding_requirement: state.snapshots?.fundingRequirement,
    source_distinction_labels: ["Reported", "Standardized", "Modeled", "Bridge-Derived"]
  };
}

/**
 * @param {unknown} raw
 */
export function importCampaignSnapshot(raw) {
  const parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
  const validation = validateCampaignSnapshot(parsed);
  if (validation.ok === false) {
    throw new Error(`Invalid campaign snapshot: ${validation.errors.join(" ")}`);
  }
  return validation.value;
}

/**
 * @param {unknown} raw
 */
export function importBudgetSnapshot(raw) {
  const parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
  const validation = validateBudgetSnapshot(parsed);
  if (validation.ok === false) {
    throw new Error(`Invalid budget snapshot: ${validation.errors.join(" ")}`);
  }
  return validation.value;
}

/**
 * @param {unknown} raw
 */
export function importFundingPathSnapshot(raw) {
  const parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
  const validation = validateFundingPathSnapshot(parsed);
  if (validation.ok === false) {
    throw new Error(`Invalid funding path snapshot: ${validation.errors.join(" ")}`);
  }
  return validation.value;
}
