import test from "node:test";
import assert from "node:assert/strict";

import {
  buildSpendTimelineSnapshot,
  computeBudgetSummary,
  computeFundingRequirementSnapshot,
  resolveClassification,
  validateFpeBudgetDemandSnapshot
} from "../src/core/index.js";
import { createCfeStore } from "../src/state/store.js";

const baseBudgetLines = [
  {
    id: "line1",
    budget_plan_id: "plan1",
    domain: "Field Program",
    category: "Field",
    title: "Organizer payroll",
    planned_amount: 100000,
    required_flag: true,
    start_date: "2026-01-01",
    end_date: "2026-05-31",
    spend_pattern: "Even",
    source_type: "Campaign-entered source"
  },
  {
    id: "line2",
    budget_plan_id: "plan1",
    domain: "Paid Media",
    category: "Media",
    title: "Digital persuasion",
    planned_amount: 50000,
    required_flag: false,
    start_date: "2026-03-01",
    end_date: "2026-05-31",
    spend_pattern: "Back-loaded",
    source_type: "Campaign-entered source"
  }
];

test("classification resolver honors manual > exact > fuzzy > unknown", () => {
  const exact = resolveClassification({
    rawValue: "teacher",
    exactRules: { teacher: "Education" }
  });
  assert.equal(exact.value, "Education");
  assert.equal(exact.resolution_source, "exact rule");

  const manual = resolveClassification({
    rawValue: "teacher",
    manualOverrideValue: "Public Sector / Government",
    exactRules: { teacher: "Education" }
  });
  assert.equal(manual.value, "Public Sector / Government");
  assert.equal(manual.resolution_source, "manual override");

  const fuzzy = resolveClassification({
    rawValue: "self employed consultant",
    fuzzyRules: [{ pattern: /consultant/i, value: "Consultant / Self-Employed" }]
  });
  assert.equal(fuzzy.resolution_source, "fuzzy rule");

  const unknown = resolveClassification({ rawValue: "" });
  assert.equal(unknown.value, "Unknown");
  assert.equal(unknown.resolution_source, "unknown");
});

test("budget summary and timeline math are canonical and deterministic", () => {
  const summary = computeBudgetSummary(baseBudgetLines);
  assert.equal(summary.total_planned_budget, 150000);
  assert.equal(summary.required_budget, 100000);
  assert.equal(summary.optional_budget, 50000);

  const timeline = buildSpendTimelineSnapshot({
    budgetPlanId: "plan1",
    scenarioId: "active",
    budgetLines: baseBudgetLines,
    electionCalendar: {
      id: "cal1",
      race_profile_id: "race1",
      primary_date: "2026-03-20",
      general_date: "2026-11-03"
    },
    currentCashOnHand: 20000,
    minimumStaticReserve: 10000
  });

  const timelineTotal = Object.values(timeline.monthly_spend_schedule).reduce(
    (sum, value) => sum + value,
    0
  );
  assert.equal(Math.round(timelineTotal), 150000);
  assert.equal(typeof timeline.peak_month, "string");
});

test("funding requirement snapshot computes gaps and statuses", () => {
  const snapshot = computeFundingRequirementSnapshot({
    campaignId: "camp1",
    scenarioId: "active",
    budgetPlanId: "plan1",
    spendTimelineSnapshotId: "timeline1",
    totalPlannedBudget: 150000,
    requiredBudget: 100000,
    reserveTarget: 15000,
    currentCashOnHand: 20000,
    currentDebt: 5000,
    committedOrReceivedFundsExpected: 10000,
    competitiveThreshold: 140000,
    raisedToDate: 15000,
    actualRaiseTotalToDate: 10000,
    electionCalendar: {
      primary_date: "2026-03-20",
      general_date: "2026-11-03"
    },
    monthlySpendSchedule: {
      "2026-01": 20000,
      "2026-02": 20000,
      "2026-03": 30000,
      "2026-04": 35000,
      "2026-05": 45000
    },
    reserveFloorByPeriod: {
      "2026-01": 10000,
      "2026-02": 10000,
      "2026-03": 12000,
      "2026-04": 13000,
      "2026-05": 15000
    }
  });

  assert.equal(snapshot.total_raise_target, 150000);
  assert.equal(typeof snapshot.path_status, "string");
  assert.equal(typeof snapshot.funding_risk_level, "string");
  assert.ok(snapshot.gap_to_safe_funding >= 0);
});

test("bridge validation rejects malformed snapshot and accepts valid shape", () => {
  const invalid = validateFpeBudgetDemandSnapshot({ snapshot_id: "x" });
  assert.equal(invalid.ok, false);

  const valid = validateFpeBudgetDemandSnapshot({
    snapshot_id: "snap1",
    schema_version: "1.0.0",
    campaign_id: "camp1",
    office_id: "office1",
    scenario_id: "active",
    created_at: "2026-01-10T12:00:00.000Z",
    total_projected_field_cost: 80000,
    monthly_field_cost_schedule: {
      "2026-01": 10000,
      "2026-02": 20000,
      "2026-03": 50000
    },
    staffing_cost_schedule: {
      "2026-01": 5000,
      "2026-02": 10000,
      "2026-03": 15000
    },
    field_spend_milestones: [{ label: "Initial ramp", month: "2026-02", amount: 20000 }],
    peak_field_spend_month: "2026-03",
    field_confidence_band: "Stable"
  });

  assert.equal(valid.ok, true);
});

test("store recomputes canonical snapshots and builds report outputs", () => {
  const store = createCfeStore();
  store.setCampaignSetup({
    scenarioId: "active",
    campaignProfile: {
      id: "camp1",
      race_profile_id: "race1",
      candidate_name: "Candidate A",
      committee_name: "Friends of Candidate A",
      campaign_start_date: "2025-12-01",
      current_cash_on_hand: 25000,
      current_debt: 5000,
      campaign_phase: "Primary"
    },
    electionCalendar: {
      id: "cal1",
      race_profile_id: "race1",
      primary_date: "2026-03-20",
      general_date: "2026-11-03"
    }
  });

  store.setBudgetPlan({
    id: "plan1",
    campaign_id: "camp1",
    scenario_id: "active",
    total_budget_planned: 0,
    total_required_budget: 0,
    required_cost_share: 0,
    optional_cost_share: 0,
    reserve_target: 15000,
    status: "Active"
  });

  for (const line of baseBudgetLines) {
    store.upsertBudgetLine(line);
  }

  store.recomputeCanonicalSnapshots({ raisedToDate: 18000, actualRaiseToDate: 16000 });

  const state = store.getState();
  assert.ok(state.snapshots.budgetSummary);
  assert.ok(state.snapshots.spendTimeline);
  assert.ok(state.snapshots.fundingRequirement);
  assert.ok(state.snapshots.reports.weeklyFinanceMemo);
});
