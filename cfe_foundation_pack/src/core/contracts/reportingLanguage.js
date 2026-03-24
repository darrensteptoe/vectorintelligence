export const REPORT_TONE_RULES = [
  "Crisp, serious, readable.",
  "Never bloated.",
  "Each section should answer: what is true, why it matters, what to do next.",
  "Do not bury risk inside decorative prose.",
  "Candidate-facing versions should be simpler but not softer on substance."
];

export const REPORT_SECTION_STRUCTURE = [
  "Executive Summary",
  "Current Condition",
  "Interpretation",
  "Risks",
  "Recommended Actions"
];

export const WEEKLY_FINANCE_MEMO_CONTENT = {
  coverTitle: "Weekly Finance Memo",
  coverSummary:
    "This memo summarizes the campaign's current funding path, finance activity, and near-term risk. It is designed to help the finance team and senior campaign leadership focus on what matters most in the next seven days.",
  executiveSummaryTemplate:
    "The campaign remains [status] against the active funding path. Current performance suggests the team is [on pace / slightly behind / materially behind / ahead of pace] relative to this period's target. The most important near-term question is whether the campaign can [hold current pace / recover pace / safely expand / protect reserve] before the next major checkpoint.",
  budgetHealth:
    "The active campaign budget remains [credible / somewhat aggressive / materially aggressive] relative to comparable campaigns. The core issue is not only total size. It is whether the timing of the plan remains supportable under the current fundraising path.",
  paceProduction:
    "The campaign's current raise pace is [status]. This week's result should be interpreted alongside activity completion, pledge conversion, and expected deposits.",
  activity:
    "The campaign completed [x]% of planned finance activity this period. The strongest activity channel was [channel]. The weakest channel was [channel].",
  riskSummary:
    "The main risks this week are [risk 1], [risk 2], and [risk 3]. None of these are theoretical. Each one has a direct effect on either cash timing, reserve protection, or the campaign's ability to carry planned commitments without strain.",
  recommendedActions: [
    "Pull forward high-probability follow-up before adding new lower-confidence asks.",
    "Protect reserve before approving additional optional spending.",
    "Treat the next checkpoint as an operating deadline, not a suggestion."
  ]
};

export const CANDIDATE_BRIEF_CONTENT = {
  title: "Candidate Finance Brief",
  opening:
    "This brief is designed to keep the candidate focused on the finance work that matters most this week.",
  summaryTemplate:
    "The campaign is currently [status] against the active finance path. The most important goal this week is to secure [amount or number of commitments] through [top channels].",
  whatCandidateNeeds: [
    "This week's raise target: [amount]",
    "Most important ask block: [description]",
    "Highest-priority follow-up: [description]",
    "Event that needs attention: [description]",
    "Main caution: [description]"
  ],
  cautionLanguage: [
    "The campaign can still recover this month, but only if follow-up is treated as seriously as fresh asks.",
    "Do not assume pledged dollars are equivalent to received dollars.",
    "This week's result matters less than whether the campaign is staying disciplined into the next checkpoint."
  ]
};

export const FINANCE_COMMITTEE_BRIEF_CONTENT = {
  title: "Finance Committee Brief",
  opening:
    "This brief is designed to help finance committee members understand where the campaign stands, what support is needed now, and which commitments should be treated as urgent.",
  summaryTemplate:
    "The campaign is currently [status] against the active finance path. Committee support is especially important in [area].",
  accountability: {
    assignedAsks: "Assigned asks: [count]",
    completedAsks: "Completed asks: [count]",
    commitmentsSecured: "Commitments secured: [count or amount]",
    followUpNeeded: "Follow-up still needed: [count]"
  },
  actionLanguage: [
    "The campaign does not need a larger committee on paper. It needs faster movement from current assignments.",
    "Host and connector activity matters most when it produces real introductions and actual follow-up.",
    "The next period is a good time to prioritize quality of asks over sheer volume."
  ]
};

export const BUDGET_HEALTH_REPORT_CONTENT = {
  title: "Budget Health Report",
  opening:
    "This report evaluates whether the campaign's full operating plan is currently supportable under the active finance path.",
  summaryTemplate:
    "The campaign's budget is currently [stable / supportable with caution / under strain / in redline].",
  categoryPressureLanguage: [
    "This category is not inherently too large, but it is arriving too early relative to the finance path.",
    "This cost is strategically valid, but it should not crowd out required operating protection.",
    "This category now deserves leadership review because it is beginning to shape tradeoffs elsewhere in the plan."
  ],
  greenlightCautionRedline: {
    Greenlight:
      "The campaign can proceed without unusual strain under the active assumptions.",
    Caution:
      "The campaign can proceed, but only with tighter timing discipline and closer checkpoint management.",
    Redline:
      "The campaign should not proceed with this commitment until the funding path materially improves."
  }
};

export const FILING_SNAPSHOT_CONTENT = {
  title: "Filing Period Snapshot",
  opening:
    "This report is designed for the period leading into a public filing or major disclosure checkpoint.",
  summaryTemplate:
    "The campaign is heading into the filing period with [status].",
  cautionLanguage: [
    "Do not confuse expected money with filed money.",
    "A better public number can help, but only if the underlying path is genuinely improving.",
    "A soft filing can be survivable if the campaign has a credible recovery path immediately after."
  ]
};

export const DONOR_INTELLIGENCE_MEMO_CONTENT = {
  title: "Donor Intelligence Memo",
  opening:
    "This memo summarizes the shape of the campaign's donor base, including geography, occupation and industry patterns, concentration, and local-versus-external support.",
  summaryTemplate:
    "The donor base currently appears [broad / concentrated / locally grounded / externally dependent / mixed].",
  interpretationGuidance: [
    "A broad donor map with shallow dollar depth suggests expansion opportunity.",
    "A strong high-dollar cluster can be valuable, but it should not become the only working engine.",
    "Occupation and industry mix should be treated as directional intelligence, not personal biography."
  ]
};

export const LEADERSHIP_RISK_REPORT_CONTENT = {
  title: "Leadership Risk Report",
  opening:
    "This report is intended for the campaign manager, senior consultant, or leadership group.",
  summaryTemplate:
    "The campaign's main near-term risks are [risk list].",
  riskParagraphs: {
    pace:
      "The campaign's current raise pace is not yet strong enough to comfortably support the active plan. This is manageable if corrected early, but it should not be normalized.",
    reserve:
      "Reserve protection has weakened to a point where ordinary slippage could begin to affect operating decisions. The right response is not panic. It is discipline.",
    fieldFunding:
      "The selected field scenario may be strategically sound, but it is not yet fully supported under the current finance path. Expansion decisions should remain conditional until funding coverage improves."
  }
};
