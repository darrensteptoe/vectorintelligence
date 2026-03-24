/**
 * @typedef {{
 *   raisedToDate: number,
 *   actualRaiseToDate: number,
 *   weekEndingDate: string,
 *   fieldPlanCost: number
 * }} DemoInputs
 */

/**
 * @param {import('../state/store.js').CfeStore} store
 * @returns {DemoInputs}
 */
export function hydrateStoreWithDemoState(store) {
  const campaignId = "camp_demo_001";
  const raceId = "race_us_house_tx07";
  const scenarioId = "active";
  const budgetPlanId = "plan_demo_active";

  store.setCampaignSetup({
    scenarioId,
    raceProfile: {
      id: raceId,
      state: "TX",
      office: "US House",
      district: "TX-07",
      election_year: 2026,
      election_type: "General",
      party: "Democratic",
      incumbency_status: "Challenger",
      seat_status: "Open",
      media_market_type: "Urban",
      district_type: "Suburban",
      filing_calendar_id: "filing_tx_2026",
      election_calendar_id: "election_tx_2026",
      notes: "Seeded browser demo profile."
    },
    campaignProfile: {
      id: campaignId,
      race_profile_id: raceId,
      candidate_name: "Jordan Rivera",
      committee_name: "Rivera for Congress",
      campaign_start_date: "2026-01-05",
      current_cash_on_hand: 52000,
      current_debt: 9000,
      campaign_phase: "Primary",
      finance_capacity_notes: "Core finance bench is staffed and active.",
      strategic_notes: "Seeded browser state for static runtime presentation."
    },
    filingCalendar: {
      id: "filing_tx_2026",
      jurisdiction: "Texas",
      cycle_year: 2026,
      filing_events: [
        {
          label: "Primary Pre-Election",
          due_date: "2026-03-08",
          period_start: "2026-01-01",
          period_end: "2026-02-28"
        },
        {
          label: "Primary Runoff",
          due_date: "2026-05-10",
          period_start: "2026-03-01",
          period_end: "2026-04-30"
        },
        {
          label: "General Pre-Election",
          due_date: "2026-10-25",
          period_start: "2026-07-01",
          period_end: "2026-10-15"
        }
      ],
      notes: "Representative filing cadence for UI initialization."
    },
    electionCalendar: {
      id: "election_tx_2026",
      race_profile_id: raceId,
      primary_date: "2026-03-03",
      runoff_date: "2026-05-26",
      general_date: "2026-11-03",
      early_vote_window: {
        start: "2026-10-19",
        end: "2026-10-30"
      },
      mail_deadlines: [
        { label: "Mail Application Deadline", date: "2026-10-23" },
        { label: "Ballot Receipt Deadline", date: "2026-11-03" }
      ]
    }
  });

  store.setBenchmarkSet({
    competitive_threshold: 238000,
    peer_median_total_raise: 226000,
    benchmark_read:
      "Current selected plan is within plausible range for district and cycle but leaves little reserve slack if receipts slip."
  });

  store.setBudgetPlan({
    id: budgetPlanId,
    campaign_id: campaignId,
    scenario_id: scenarioId,
    total_budget_planned: 0,
    total_required_budget: 0,
    required_cost_share: 0,
    optional_cost_share: 0,
    reserve_target: 32000,
    status: "Active",
    notes: "Seeded active plan"
  });

  const budgetLines = [
    {
      id: "line_field_ops",
      budget_plan_id: budgetPlanId,
      domain: "Field Program",
      category: "Field",
      title: "Organizer payroll and turf operations",
      planned_amount: 112000,
      required_flag: true,
      optionality_level: "Core",
      priority_rank: 1,
      start_date: "2026-01-10",
      end_date: "2026-11-02",
      spend_pattern: "Even",
      phase_label: "Field",
      source_type: "Campaign-entered source"
    },
    {
      id: "line_paid_media",
      budget_plan_id: budgetPlanId,
      domain: "Paid Media",
      category: "Media",
      title: "Digital persuasion and GOTV media",
      planned_amount: 78000,
      required_flag: false,
      optionality_level: "Expansion",
      priority_rank: 4,
      start_date: "2026-03-01",
      end_date: "2026-11-01",
      spend_pattern: "Back-loaded",
      phase_label: "Persuasion",
      source_type: "Campaign-entered source"
    },
    {
      id: "line_compliance",
      budget_plan_id: budgetPlanId,
      domain: "Compliance / Legal / Accounting",
      category: "Compliance",
      title: "Treasurer, filing support, and legal review",
      planned_amount: 34000,
      required_flag: true,
      optionality_level: "Core",
      priority_rank: 2,
      start_date: "2026-01-01",
      end_date: "2026-11-03",
      spend_pattern: "Even",
      phase_label: "Compliance",
      source_type: "Campaign-entered source"
    },
    {
      id: "line_events",
      budget_plan_id: budgetPlanId,
      domain: "Fundraising Event Costs",
      category: "Events",
      title: "Host receptions and finance event operations",
      planned_amount: 28000,
      required_flag: false,
      optionality_level: "Conditional",
      priority_rank: 5,
      start_date: "2026-02-01",
      end_date: "2026-09-30",
      spend_pattern: "Front-loaded",
      phase_label: "Finance",
      source_type: "Campaign-entered source"
    },
    {
      id: "line_payroll",
      budget_plan_id: budgetPlanId,
      domain: "Staff Payroll",
      category: "Payroll",
      title: "Core campaign staff payroll",
      planned_amount: 92000,
      required_flag: true,
      optionality_level: "Core",
      priority_rank: 3,
      start_date: "2026-01-01",
      end_date: "2026-11-03",
      spend_pattern: "Even",
      phase_label: "Operations",
      source_type: "Campaign-entered source"
    }
  ];

  for (const line of budgetLines) {
    store.upsertBudgetLine(line);
  }

  store.setFinanceActivities([
    {
      id: "activity_calltime_01",
      campaign_id: campaignId,
      scenario_id: scenarioId,
      activity_type: "Call Time",
      channel: "Call Time",
      owner: "Candidate",
      title: "Major donor candidate call block",
      scheduled_start: "2026-03-21T14:00:00.000Z",
      scheduled_end: "2026-03-21T16:00:00.000Z",
      goal_amount: 16000,
      goal_donor_count: 10,
      status: "Completed"
    },
    {
      id: "activity_calltime_02",
      campaign_id: campaignId,
      scenario_id: scenarioId,
      activity_type: "Donor Meeting",
      channel: "Major Donor Meetings",
      owner: "Finance Director",
      title: "Family-office principal meeting",
      scheduled_start: "2026-03-22T18:00:00.000Z",
      scheduled_end: "2026-03-22T19:00:00.000Z",
      goal_amount: 22000,
      goal_donor_count: 1,
      status: "Scheduled"
    },
    {
      id: "activity_event_01",
      campaign_id: campaignId,
      scenario_id: scenarioId,
      activity_type: "Fundraiser",
      channel: "Events",
      owner: "Finance Chair",
      title: "West side host reception",
      scheduled_start: "2026-03-24T23:00:00.000Z",
      scheduled_end: "2026-03-25T01:00:00.000Z",
      goal_amount: 18000,
      goal_donor_count: 45,
      status: "Scheduled"
    },
    {
      id: "activity_online_01",
      campaign_id: campaignId,
      scenario_id: scenarioId,
      activity_type: "Online Push",
      channel: "Digital",
      owner: "Digital Director",
      title: "End-of-quarter digital push",
      scheduled_start: "2026-03-23T12:00:00.000Z",
      scheduled_end: "2026-03-31T04:59:00.000Z",
      goal_amount: 14000,
      goal_donor_count: 320,
      status: "In Progress"
    }
  ]);

  const fieldPlanCost = 130000;
  store.importFpeSnapshot({
    snapshot_id: "fpe_snapshot_demo_01",
    schema_version: "1.0.0",
    campaign_id: campaignId,
    office_id: "us_house_tx07",
    scenario_id: scenarioId,
    created_at: "2026-03-20T18:00:00.000Z",
    total_projected_field_cost: fieldPlanCost,
    monthly_field_cost_schedule: {
      "2026-04": 25000,
      "2026-05": 26000,
      "2026-06": 27000,
      "2026-07": 28000,
      "2026-08": 24000
    },
    staffing_cost_schedule: {
      "2026-04": 11000,
      "2026-05": 12000,
      "2026-06": 13000,
      "2026-07": 13000,
      "2026-08": 12000
    },
    field_spend_milestones: [
      { label: "Base turf launch", month: "2026-04", amount: 25000 },
      { label: "Persuasion expansion", month: "2026-06", amount: 30000 },
      { label: "GOTV staffing ramp", month: "2026-08", amount: 36000 }
    ],
    peak_field_spend_month: "2026-07",
    field_confidence_band: "Stable",
    notes: "Seeded FPE bridge snapshot"
  });

  const demoInputs = {
    raisedToDate: 102000,
    actualRaiseToDate: 89000,
    weekEndingDate: "2026-03-24",
    fieldPlanCost
  };

  store.recomputeCanonicalSnapshots({
    raisedToDate: demoInputs.raisedToDate,
    actualRaiseToDate: demoInputs.actualRaiseToDate,
    weekEndingDate: demoInputs.weekEndingDate
  });

  return demoInputs;
}
