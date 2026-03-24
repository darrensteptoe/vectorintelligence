export const NAVIGATION_LABELS = [
  "Overview",
  "Budget Plan",
  "Spend Timeline",
  "Funding Path",
  "Finance Activity",
  "Donor Intelligence",
  "Expenditure Intelligence",
  "Reports",
  "Manual",
  "Settings"
];

export const GLOBAL_STATUS_LABELS = {
  funding: [
    "Fully Fundable",
    "Mostly Fundable",
    "Partially Fundable",
    "Not Yet Fundable",
    "Redline"
  ],
  pace: [
    "On Pace",
    "Slightly Behind",
    "Materially Behind",
    "Ahead of Pace",
    "Pace Unclear"
  ],
  reserve: [
    "Reserve Protected",
    "Reserve Watch",
    "Reserve Pressure",
    "Reserve Breach"
  ]
};

export const OVERVIEW_SURFACE = {
  header: "Campaign Finance Engine",
  subheader: "Budget, timing, and fundraising control for the full campaign.",
  intro:
    "Use this page to see whether the campaign's current fundraising path is sufficient to support the full operating plan. The most important questions here are whether the budget is realistic, whether cash will arrive in time, and whether major expansion decisions are safe under current conditions.",
  heroCards: {
    totalCampaignBudget: {
      title: "Total Campaign Budget",
      support:
        "The full projected campaign budget across all major domains, including field, staff, consultants, communications, compliance, and reserve."
    },
    totalRaiseRequired: {
      title: "Total Raise Required",
      support:
        "The amount the campaign must raise to safely support the selected budget plan, given current cash, projected commitments, and reserve requirements."
    },
    currentFundingStatus: {
      title: "Current Funding Status",
      support:
        "A practical read on how much of the campaign plan is currently supported under the active finance path."
    },
    reserveStatus: {
      title: "Reserve Status",
      support:
        "Whether the campaign is maintaining enough protection to absorb normal timing slippage and avoid self-inflicted cash stress."
    }
  },
  interpretation: {
    header: "How to read this page",
    body:
      "This page is designed to answer three questions first: Are we trying to fund a credible campaign? Are we raising money fast enough to support the plan? And are there upcoming points where cash needs will outrun the current pace? If one of those answers is weak, the next step is not more dashboard-watching. The next step is to adjust the budget, the fundraising plan, or both."
  },
  emptyState: {
    header: "No campaign budget has been built yet",
    body:
      "CFE can show historical benchmarks without a budget, but it cannot generate a real finance path until the campaign plan has been translated into budget lines and timing. Start by building the campaign budget or importing the field demand snapshot.",
    cta: "Build Budget Plan"
  }
};

export const BUDGET_PLAN_SURFACE = {
  header: "Budget Plan",
  subheader: "Map the campaign the team intends to run - not just the dollars already spent.",
  intro:
    "A useful finance engine starts with an honest campaign budget. This page should reflect the actual operating plan across the full campaign, including required costs, optional costs, timing, and reserve expectations. If the budget is unreal, the finance path will be unreal too.",
  lineStatusLabels: [
    "Required",
    "Important but Flexible",
    "Optional if Funding Improves",
    "Deferred Until Greenlight"
  ]
};

export const BUDGET_CATEGORY_HELPER_TEXT = {
  "Field Program":
    "Organizers, canvass operations, voter contact infrastructure, staff ramp, and direct field execution costs.",
  "Staff Payroll":
    "Salaries, stipends, payroll load, and support staffing not already captured elsewhere.",
  "Consultants / Strategy":
    "Senior strategic support, communications, direct mail, digital, finance consulting, or other advisory retainers.",
  "Polling / Research":
    "Polls, message testing, opposition research, and paid research support.",
  "Digital Program":
    "Digital content, digital ads, acquisition, fundraising creative, and digital support not included in broader paid media.",
  "Paid Media": "Television, radio, streaming, cable, or broader paid communications.",
  "Direct Mail": "Voter mail, fundraising mail, design, postage, and production.",
  "Compliance / Legal / Accounting":
    "Treasurer support, compliance review, legal, accounting, and filing support.",
  "Office / Operations / Software":
    "Office costs, software, subscriptions, hosting, utilities, and campaign operations support.",
  "Creative / Photo / Video":
    "Brand photography, campaign launch materials, paid creative, short-form video, long-form production, and media assets.",
  "Fundraising Event Costs":
    "Venue, food, beverage, printed materials, event support, and event production costs.",
  "Travel / Meals": "Campaign travel, reimbursements, and operational meal costs.",
  "Printing / Signs / Literature":
    "Print materials, literature, yard signs, walk cards, palm cards, and related production.",
  "Data / Voter File / Tools":
    "Data access, universes, voter file costs, analytics, targeting, and operational tools.",
  "Contingency / Reserve":
    "Non-trivial protection against timing slippage, normal operating surprises, or strategic shifts."
};

export const SPEND_TIMELINE_SURFACE = {
  header: "Spend Timeline",
  subheader: "See when the campaign will need cash, not just how much it will need in total.",
  intro:
    "A campaign rarely fails because someone misread the total budget by a few thousand dollars. It fails because money does not arrive in time for hiring, production, paid communication, or voter contact. This page is about timing discipline.",
  interpretation:
    "This timeline should show where the campaign enters pressure. The important moments are not only the peaks. They are the months where commitments stack faster than the current finance path can safely support them. Those are the months that should shape fundraising behavior now.",
  callouts: {
    pressure: "A period where planned obligations increase faster than the current raise pace can safely absorb.",
    peak: "The month or cluster of weeks where the campaign expects the highest cash burn.",
    threshold:
      "A point where a hiring, media, field, or consultant decision becomes difficult to reverse."
  },
  emptyState: {
    header: "No spend timing has been generated yet",
    body:
      "Build a campaign budget with date-aware lines, or import the field demand snapshot, to generate a usable spend curve.",
    cta: "Generate Spend Timeline"
  }
};

export const FUNDING_PATH_SURFACE = {
  header: "Funding Path",
  subheader:
    "Translate the campaign plan into concrete raise targets, checkpoints, and channel expectations.",
  intro:
    "This page answers the practical finance question: what must be raised, by when, and from where, if the campaign is going to safely support the plan it has chosen.",
  interpretation:
    "A strong funding path is not just a big total number. It has credible monthly pacing, realistic reserve protection, and a channel mix the campaign can actually execute. If the path looks mathematically possible but operationally thin, treat it as unstable.",
  coreCardDescriptions: {
    targetTotalRaise: "The total amount the campaign should raise to support the active budget path.",
    thisMonthRaiseTarget:
      "The amount the campaign should aim to secure in the current month to remain on path.",
    weeklyPaceRequirement: "The weekly production rate required to support the monthly target.",
    checkpointRequirement:
      "What needs to be in or effectively secured by the next major date."
  },
  successStates: [
    "Funding path is currently stable. The campaign still needs discipline, but the active plan is broadly supportable under current assumptions.",
    "Funding path is viable with attention. The campaign is not in immediate danger, but the next checkpoint matters and should not be treated casually.",
    "Funding path is under strain. The campaign can still recover, but it should not expand commitments until production improves.",
    "Funding path is in redline. The campaign is carrying more obligation than the current finance path can responsibly support."
  ]
};

export const FINANCE_ACTIVITY_SURFACE = {
  header: "Finance Activity",
  subheader: "Track the work that produces the money.",
  intro:
    "A finance plan is only real if it is tied to activity. This page should help the campaign see whether it is scheduling enough work, completing enough work, and turning that work into commitments and receipts.",
  activityTypeHelperText: {
    "Call Time": "Structured candidate or principal fundraising calls.",
    "Donor Meeting": "One-on-one or small-group ask meetings.",
    Fundraiser: "Hosted event with targeted asks or donor collection.",
    "Finance Committee Touch":
      "Outreach or coordination tied to committee member assignments.",
    "Online Push": "Email, SMS, or digital fundraising effort.",
    "Follow-Up Block": "Dedicated time to convert prior asks, commitments, or event leads.",
    "Internal Finance Review": "Team planning, progress review, or checkpoint adjustment."
  },
  emptyState: {
    header: "No finance activity has been scheduled",
    body:
      "CFE can show budgets and targets without activity data, but it cannot tell you whether the campaign is doing enough work to reach the path. Schedule call time, meetings, events, or follow-up blocks to begin tracking execution.",
    cta: "Add Activity"
  },
  performanceCopy: {
    strong:
      "Activity completion is strong. The campaign is generally doing the work it planned to do.",
    mixed:
      "Activity completion is mixed. Enough is happening to keep the system useful, but shortfalls in execution are beginning to matter.",
    weak:
      "Activity completion is weak. The campaign is relying too heavily on the plan while under-executing the actual work needed to produce money."
  }
};

export const DONOR_INTELLIGENCE_SURFACE = {
  header: "Donor Intelligence",
  subheader:
    "See where support comes from, who funds the campaign, and how concentrated the donor base really is.",
  intro:
    "This page is not about curiosity. It is about leverage and risk. Geography, occupation, industry, and donor concentration can all shape how durable the fundraising base is and where the campaign should invest its next round of asks.",
  geographyInterpretation:
    "A strong geography view should tell you whether the donor base is broad or narrow, local or external, and whether the campaign is overdependent on a few donor-rich clusters. Use this page to identify depth, overreliance, and untapped pockets.",
  occupationInterpretation:
    "Occupation and industry summaries are most useful when treated as coalition clues, not perfect sociology. They can show where the donor base is strongest, which sectors are carrying the campaign, and where the campaign's fundraising identity may be too narrow."
};

export const EXPENDITURE_INTELLIGENCE_SURFACE = {
  header: "Expenditure Intelligence",
  subheader:
    "Track how money is actually being used - and whether the spend profile matches the campaign's stated strategy.",
  intro:
    "A campaign can raise money and still use it badly. This page is designed to show where spending is going, whether that mix is reasonable for the race, and whether operational or consultant overhead is crowding out core needs."
};

export const REPORTS_SURFACE = {
  header: "Reports",
  subheader:
    "Generate sharp, circulation-ready finance reports without re-explaining the system every time.",
  intro:
    "Reports should help the campaign act. They should be legible to candidates, useful to finance staff, and credible to consultants and senior leadership. A good report clarifies what is true, what is at risk, and what should happen next.",
  reportListHelper: {
    weeklyMemo: "Best for the finance team and campaign manager.",
    candidateBrief: "Best for weekly candidate prep and call time focus.",
    committeeBrief: "Best for host, committee, and major donor accountability.",
    budgetHealth: "Best for senior review of what the campaign can safely afford.",
    filingSnapshot: "Best near disclosure deadlines and public number-setting moments.",
    donorMemo: "Best for understanding the shape of the donor base."
  }
};

export const GLOBAL_EMPTY_STATES = {
  noHistoricalData: {
    header: "No comparable finance history is attached yet",
    body:
      "The app can still model a campaign budget and funding path, but the realism layer will remain thinner until comparable disclosure history has been pulled and reviewed."
  },
  noDonorIntelligence: {
    header: "Donor intelligence view is not ready yet",
    body:
      "This page depends on imported contribution records and at least basic geography or occupation review. Once donor data is linked, CFE will begin surfacing geography, concentration, and donor-base composition insights."
  },
  noReportContext: {
    header: "This report needs a current snapshot",
    body:
      "Reports are generated from canonical snapshots so the language and numbers stay consistent. Refresh the active path before generating a circulation-ready report."
  }
};

export const TOOLTIP_LIBRARY = {
  comparableRaces:
    "Historical campaigns used to benchmark realism, thresholds, and timing norms.",
  reserveFloor:
    "The minimum cushion the campaign should maintain to avoid obvious timing stress and prevent routine cash disruption.",
  checkpointTarget:
    "What the campaign should have raised or effectively secured by a specific upcoming date.",
  modeledValue: "An estimate generated from CFE logic rather than directly imported source data.",
  standardizedValue: "A source value that has been normalized for comparison and analysis.",
  manualOverride:
    "A reviewed value that intentionally supersedes the app's default classification or grouping."
};

// Compatibility exports retained for legacy page modules from the foundation scaffold.
export const CORE_HELPER_TEXT = {
  totalPlannedBudget: OVERVIEW_SURFACE.heroCards.totalCampaignBudget.support,
  currentRaisePace: FUNDING_PATH_SURFACE.coreCardDescriptions.weeklyPaceRequirement,
  nextCheckpointTarget: FUNDING_PATH_SURFACE.coreCardDescriptions.checkpointRequirement,
  reserveStatus: OVERVIEW_SURFACE.heroCards.reserveStatus.support,
  fieldFundingStatus:
    "Whether the selected field posture is currently supportable under active reserve and funding assumptions."
};

export const EMPTY_STATES = {
  budget: OVERVIEW_SURFACE.emptyState,
  timeline: SPEND_TIMELINE_SURFACE.emptyState,
  benchmarks: GLOBAL_EMPTY_STATES.noHistoricalData,
  fundingPath: {
    header: "No funding path has been generated yet",
    body:
      "Create a budget plan and recompute canonical snapshots to generate target totals, pacing, and checkpoint requirements.",
    cta: "Generate Funding Path"
  },
  channels: {
    header: "No channel plan is attached yet",
    body:
      "Funding paths can be generated without channel detail, but channel-level accountability is required for practical execution."
  },
  activity: FINANCE_ACTIVITY_SURFACE.emptyState,
  pledges: {
    header: "No pledges are currently tracked",
    body:
      "Log pledges separately from receipts so expected money and received money remain visible as different states."
  },
  donors: GLOBAL_EMPTY_STATES.noDonorIntelligence,
  spending: {
    header: "No expenditure intelligence view is available yet",
    body:
      "Import and classify expenditure records to generate spend-mix and timing interpretation for this surface."
  },
  risks: {
    header: "No active risk flags",
    body:
      "No current risk flag is active under the latest snapshot, but reserve and pace should still be reviewed at each checkpoint."
  }
};

export const TOOLTIPS = {
  onPath: "Tracking broadly in line with the active funding path.",
  watch: "Recoverable, but margins are thinner and should be monitored closely.",
  offPath: "Current pace is behind what the active path requires.",
  healthyReserve: "Reserve Protected status under current assumptions.",
  tightReserve: "Reserve Watch status; workable but less forgiving.",
  atRiskReserve: "Reserve Pressure or Reserve Breach; treat commitments cautiously."
};

export const CORE_CARD_TITLES = [
  OVERVIEW_SURFACE.heroCards.totalCampaignBudget.title,
  OVERVIEW_SURFACE.heroCards.totalRaiseRequired.title,
  OVERVIEW_SURFACE.heroCards.currentFundingStatus.title,
  OVERVIEW_SURFACE.heroCards.reserveStatus.title,
  FUNDING_PATH_SURFACE.coreCardDescriptions.targetTotalRaise,
  FUNDING_PATH_SURFACE.coreCardDescriptions.thisMonthRaiseTarget,
  FUNDING_PATH_SURFACE.coreCardDescriptions.weeklyPaceRequirement,
  FUNDING_PATH_SURFACE.coreCardDescriptions.checkpointRequirement
];

export const BUTTON_LABELS = [
  "Build Budget Plan",
  "Generate Spend Timeline",
  "Generate Funding Path",
  "Add Activity",
  "Generate Report"
];

export const CONFIRMATIONS = {
  recomputeFundingPath:
    "Recompute canonical funding and timing snapshots with the latest budget, activity, and current-condition inputs?",
  applyManualOverride:
    "Apply this manual override? Manual values should only supersede defaults when review coverage is adequate."
};

export const SHORT_LABELS = ["Reported", "Standardized", "Modeled", "Needs Review", "Manual", "Auto"];
