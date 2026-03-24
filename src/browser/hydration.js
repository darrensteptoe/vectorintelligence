/**
 * @param {import('../state/store.js').CfeStore} store
 */
export function hydrateStoreWithDemoState(store) {
  const campaignId = "camp_demo_001";
  const scenarioId = "active";

  store.setCampaignSetup({
    scenarioId,
    scenarioState: "Active Scenario",
    activeRole: "Finance Director",
    campaignProfile: {
      id: campaignId,
      race_profile_id: "race_tx_07",
      candidate_name: "Jordan Rivera",
      committee_name: "Rivera for Congress",
      campaign_start_date: "2026-01-05",
      current_cash_on_hand: 52000,
      current_debt: 7000,
      campaign_phase: "Primary"
    },
    electionCalendar: {
      id: "calendar_tx_07",
      race_profile_id: "race_tx_07",
      primary_date: "2026-03-20",
      general_date: "2026-11-03"
    },
    donorGeoSummary: {
      top_zip_by_dollars: "77002",
      top_zip_by_count: "77019",
      in_district_share: 0.58,
      outside_network_share: 0.42
    },
    spendMixSummary: {
      field_share: 0.36,
      paid_media_share: 0.27,
      payroll_share: 0.19,
      consultant_share: 0.11,
      compliance_ops_share: 0.07
    },
    channelTargetPlan: {
      call_time_target: 42000,
      major_donor_target: 38000,
      event_target: 29000,
      online_target: 18000,
      committee_target: 14000,
      other_support_target: 9000
    }
  });

  store.setBenchmarkSet({
    competitive_threshold: 215000,
    comparables_loaded: 6,
    benchmark_read: "Selected scenario is above median benchmark load but still operationally plausible."
  });

  store.setBudgetPlan({
    id: "plan_active_001",
    campaign_id: campaignId,
    scenario_id: scenarioId,
    total_budget_planned: 0,
    total_required_budget: 0,
    required_cost_share: 0,
    optional_cost_share: 0,
    reserve_target: 26000,
    status: "Locked"
  });

  const budgetLines = [
    {
      id: "line_field_staff",
      budget_plan_id: "plan_active_001",
      domain: "Field Program",
      category: "Field",
      title: "Organizer payroll and turf operations",
      planned_amount: 98000,
      required_flag: true,
      start_date: "2026-01-15",
      end_date: "2026-08-31",
      spend_pattern: "Even",
      source_type: "Campaign-entered source"
    },
    {
      id: "line_paid_media",
      budget_plan_id: "plan_active_001",
      domain: "Paid Media",
      category: "Media",
      title: "Digital persuasion and GOTV media",
      planned_amount: 67000,
      required_flag: false,
      start_date: "2026-03-01",
      end_date: "2026-11-01",
      spend_pattern: "Back-loaded",
      source_type: "Campaign-entered source"
    },
    {
      id: "line_compliance",
      budget_plan_id: "plan_active_001",
      domain: "Compliance / Legal / Accounting",
      category: "Compliance",
      title: "Treasurer, compliance counsel, and filing operations",
      planned_amount: 28000,
      required_flag: true,
      start_date: "2026-01-01",
      end_date: "2026-11-03",
      spend_pattern: "Even",
      source_type: "Campaign-entered source"
    },
    {
      id: "line_events",
      budget_plan_id: "plan_active_001",
      domain: "Event Costs",
      category: "Events",
      title: "Finance event production and host support",
      planned_amount: 24000,
      required_flag: false,
      start_date: "2026-02-01",
      end_date: "2026-09-30",
      spend_pattern: "Front-loaded",
      source_type: "Campaign-entered source"
    }
  ];

  for (const line of budgetLines) {
    store.upsertBudgetLine(line);
  }

  store.setFinanceActivities([
    {
      id: "act_001",
      campaign_id: campaignId,
      scenario_id: scenarioId,
      activity_type: "Call Time",
      channel: "Call Time",
      owner: "Candidate",
      title: "Candidate high-dollar call block",
      scheduled_start: "2026-03-17T09:00:00.000Z",
      scheduled_end: "2026-03-17T11:00:00.000Z",
      goal_amount: 12000,
      status: "Completed"
    },
    {
      id: "act_002",
      campaign_id: campaignId,
      scenario_id: scenarioId,
      activity_type: "Call Time",
      channel: "Call Time",
      owner: "Finance Director",
      title: "Tier-2 donor call block",
      scheduled_start: "2026-03-18T14:00:00.000Z",
      scheduled_end: "2026-03-18T16:00:00.000Z",
      goal_amount: 9000,
      status: "Completed"
    },
    {
      id: "act_003",
      campaign_id: campaignId,
      scenario_id: scenarioId,
      activity_type: "Call Time",
      channel: "Call Time",
      owner: "Candidate",
      title: "Primary close call block",
      scheduled_start: "2026-03-19T09:00:00.000Z",
      scheduled_end: "2026-03-19T11:00:00.000Z",
      goal_amount: 11000,
      status: "In Progress"
    },
    {
      id: "act_004",
      campaign_id: campaignId,
      scenario_id: scenarioId,
      activity_type: "Donor Meeting",
      channel: "Major Donor Meetings",
      owner: "Finance Chair",
      title: "Family-office principal meeting",
      scheduled_start: "2026-03-20T18:30:00.000Z",
      scheduled_end: "2026-03-20T19:30:00.000Z",
      goal_amount: 20000,
      status: "Planned"
    },
    {
      id: "act_005",
      campaign_id: campaignId,
      scenario_id: scenarioId,
      activity_type: "Fundraiser",
      channel: "Events",
      owner: "Events Lead",
      title: "Northside host reception",
      scheduled_start: "2026-03-21T23:00:00.000Z",
      scheduled_end: "2026-03-22T01:00:00.000Z",
      goal_amount: 15000,
      status: "Planned"
    },
    {
      id: "act_006",
      campaign_id: campaignId,
      scenario_id: scenarioId,
      activity_type: "Call Time",
      channel: "Call Time",
      owner: "Candidate",
      title: "Follow-up conversion block",
      scheduled_start: "2026-03-22T16:00:00.000Z",
      scheduled_end: "2026-03-22T18:00:00.000Z",
      goal_amount: 10000,
      status: "Deferred"
    },
    {
      id: "act_007",
      campaign_id: campaignId,
      scenario_id: scenarioId,
      activity_type: "Call Time",
      channel: "Call Time",
      owner: "Finance Director",
      title: "Committee follow-up sprint",
      scheduled_start: "2026-03-23T15:00:00.000Z",
      scheduled_end: "2026-03-23T17:00:00.000Z",
      goal_amount: 8000,
      status: "Completed"
    },
    {
      id: "act_008",
      campaign_id: campaignId,
      scenario_id: scenarioId,
      activity_type: "Call Time",
      channel: "Call Time",
      owner: "Candidate",
      title: "Late pledge conversion calls",
      scheduled_start: "2026-03-24T13:00:00.000Z",
      scheduled_end: "2026-03-24T15:00:00.000Z",
      goal_amount: 7000,
      status: "Planned"
    }
  ]);

  store.importFpeSnapshot({
    snapshot_id: "fpe_snap_001",
    schema_version: "1.0.0",
    campaign_id: campaignId,
    office_id: "us_house_tx_07",
    scenario_id: scenarioId,
    created_at: "2026-03-18T12:00:00.000Z",
    total_projected_field_cost: 112000,
    monthly_field_cost_schedule: {
      "2026-03": 24000,
      "2026-04": 26000,
      "2026-05": 28000,
      "2026-06": 34000
    },
    staffing_cost_schedule: {
      "2026-03": 9000,
      "2026-04": 11000,
      "2026-05": 12000,
      "2026-06": 14000
    },
    field_spend_milestones: [
      { label: "Base turf launch", month: "2026-03", amount: 22000 },
      { label: "Persuasion expansion", month: "2026-05", amount: 36000 }
    ],
    peak_field_spend_month: "2026-06",
    field_confidence_band: "Stable"
  });

  store.recomputeCanonicalSnapshots({
    raisedToDate: 86000,
    actualRaiseToDate: 69000,
    weekEndingDate: "2026-03-24"
  });
}
