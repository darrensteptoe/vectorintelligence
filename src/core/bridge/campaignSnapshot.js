import { isIsoDateLike } from "../contracts/types.js";

export const CFE_CAMPAIGN_SNAPSHOT_VERSION = "1.0.0";

/**
 * @param {unknown} candidate
 * @returns {{ok: true, value: Record<string, unknown>} | {ok: false, errors: string[]}}
 */
export function validateCampaignSnapshot(candidate) {
  /** @type {string[]} */
  const errors = [];

  if (!candidate || typeof candidate !== "object" || Array.isArray(candidate)) {
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

  if (!isIsoDateLike(snapshot.generated_at)) {
    errors.push("generated_at must be ISO date-like.");
  }

  const requiredObjects = ["budget_summary", "spend_timeline", "funding_requirement"];
  for (const key of requiredObjects) {
    if (!snapshot[key] || typeof snapshot[key] !== "object" || Array.isArray(snapshot[key])) {
      errors.push(`${key} must be an object.`);
    }
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
 * @param {unknown} raw
 */
export function importCampaignSnapshot(raw) {
  const parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
  const validation = validateCampaignSnapshot(parsed);
  if (!validation.ok) {
    throw new Error(`Invalid campaign snapshot: ${validation.errors.join(" ")}`);
  }
  return validation.value;
}
