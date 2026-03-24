export const REPORT_TONE_RULES = [
  "Clear and disciplined.",
  "Meant to travel inside real campaigns.",
  "Strong enough for leadership; plain enough for candidates.",
  "Never sounds like generic SaaS copy.",
  "Never overclaims what the data can support.",
  "Name risk directly and tie it to next action."
];

export const REPORT_SECTION_STRUCTURE = [
  "Executive Summary",
  "Current Condition",
  "Interpretation",
  "Risks",
  "Recommended Actions"
];

export const REPORT_STATUS_PHRASES = {
  strong: [
    "remains on a workable path",
    "broadly aligned with the active plan",
    "holding within a usable range",
    "operating with a manageable level of pressure",
    "showing disciplined completion of core finance work",
    "carrying the plan at a credible level"
  ],
  mixed: [
    "still recoverable, but narrower than preferred",
    "workable for now, though the margin for error is thinning",
    "not yet a crisis, but no longer comfortable",
    "producing enough to stay alive, but not enough to feel secure",
    "carrying some of the plan, but not all of it cleanly"
  ],
  weak: [
    "materially behind the active path",
    "too soft relative to upcoming commitments",
    "not yet cash-safe",
    "relying on assumptions the campaign has not earned",
    "vulnerable to even a modest delay in receipts",
    "carrying less of the plan than leadership should be comfortable with"
  ]
};

export const REPORT_PREFACE_VARIANTS = {
  standard:
    "This report is designed to show what the campaign is trying to fund, how current fundraising compares with that requirement, and where timing or execution risk may pressure the plan next.",
  benchmarkHeavy:
    "This report combines the campaign's active budget and finance condition with historical evidence from comparable races. Historical benchmarks are used here as realism context, not as a substitute for campaign planning.",
  candidateFacing:
    "This report is meant to make the finance path easier to act on. It focuses on near-term targets, the most important asks, and activity most likely to move the campaign forward."
};

export const WEEKLY_FINANCE_MEMO_CONTENT = {
  title: "Weekly Finance Memo",
  executiveSummaryTemplates: {
    onPath:
      "The campaign remains broadly aligned with the active finance path, but the current margin for error is narrower than preferred. This week should be treated as a working finance week, not a maintenance week, with particular emphasis on follow-up and higher-yield asks.",
    watch:
      "The campaign is still within reach of the active path, but recent activity and receipts were not strong enough to fully support the next spending window. The immediate priority is not cosmetic optimism. It is disciplined execution against the next two weeks of finance work.",
    offPath:
      "The campaign is behind the active path in a way that now affects timing, not just totals. The next period should focus on restoring receipt pace, protecting reserve, and avoiding optional spending commitments that assume money not yet safely in hand."
  },
  fundingStatusTemplate:
    "The current raise path calls for [target_period_amount] during this period. The campaign recorded [actual_period_amount], leaving a period variance of [variance_amount]. This does not mean the path is lost, but it does mean the campaign is carrying more timing pressure into the next spending window than preferred.",
  activityReadTemplate:
    "Planned finance work was [activity_completion_rate]% complete for the period. The strongest activity came from [top_channel], while [weak_channel] underperformed relative to plan. The practical takeaway is that the path is being carried by a narrower set of activities than intended.",
  pledgeReadTemplate:
    "The current pledge pipeline still contains value, but unresolved commitments are beginning to matter more. The fastest near-term improvement available to the campaign is often not a brand-new ask; it is disciplined follow-up on money already discussed.",
  riskReadTemplates: [
    "Reserve is workable but thinner than preferred.",
    "Upcoming costs are beginning to arrive faster than current receipts.",
    "The event program is not weak enough to abandon, but not strong enough to carry the path by itself.",
    "The campaign's current position can still stabilize, but only if the next period is materially stronger than the last one."
  ],
  defaultActions: [
    "Increase candidate call time volume over the next two weeks and narrow the ask list to higher-probability targets.",
    "Push immediate follow-up on unresolved commitments already in the pipeline before adding new lower-probability asks.",
    "Delay optional spending until the next funding checkpoint improves."
  ]
};

export const CANDIDATE_BRIEF_CONTENT = {
  title: "Candidate Brief",
  opening:
    "This brief is designed to make the path actionable. It is not a full finance memo. It is the short list of what matters most right now: what must be raised next, which asks are most important, and where your time will have the greatest effect.",
  currentPositionTemplate:
    "The campaign is currently [path_status] against the active finance path. The immediate goal is to secure [near_term_goal] before the next budget pressure point. That means the next week should be treated as a targeted raise week, not a general outreach week.",
  priorities: [
    "Make the top scheduled asks first.",
    "Resolve outstanding commitments before adding too many new low-probability asks.",
    "Protect time for events or meetings most likely to produce near-term receipts.",
    "Treat follow-up as part of fundraising, not as optional cleanup."
  ],
  toneVariants: {
    steady: "The campaign is still within reach of its path, but the next period matters.",
    urgent: "The campaign can still recover ground, but it needs stronger execution immediately.",
    positive:
      "There is enough opportunity in the current pipeline to improve the picture, but only if the campaign acts on it."
  }
};

export const FINANCE_COMMITTEE_BRIEF_CONTENT = {
  title: "Finance Committee Brief",
  intro:
    "This memo is meant to create accountability and clarity, not noise. It shows where the committee can move money, where follow-up is lagging, and what support the campaign needs from committee members now.",
  accountabilityTemplate:
    "Committee-assigned prospects remain an important part of the active path, but completion and follow-up are uneven. The campaign will benefit more from a smaller number of completed, disciplined asks than from a larger number of nominal assignments that do not move.",
  actionHeader: "What the Committee Should Do Next",
  actions: [
    "Complete assigned asks by the stated deadline.",
    "Escalate any high-value ask requiring candidate support.",
    "Move unresolved commitments toward firm dates and amounts.",
    "Concentrate on hosts and asks most likely to affect the next report or spend window."
  ]
};

export const BUDGET_HEALTH_REPORT_CONTENT = {
  title: "Leadership Budget Health Report",
  opening:
    "This report is meant to help leadership decide what parts of the campaign plan are currently supportable, what is under pressure, and what should not expand yet.",
  budgetRealismTemplate:
    "Relative to comparable races, the active budget appears [realism_status]. That does not decide what the campaign should do, but it does matter when assessing how much discipline the finance plan will require.",
  timingPressureTemplate:
    "The most important upcoming cost window falls in [pressure_window]. Under the active pace, the campaign's ability to enter that window cleanly depends on both stronger receipts and disciplined control of optional commitments.",
  safelyFundableTemplate:
    "At the current pace and reserve posture, the campaign can safely support [safely_fundable_summary]. The portions of the plan that remain less secure are [less_secure_summary]."
};

export const DONOR_INTELLIGENCE_MEMO_CONTENT = {
  title: "Donor Intelligence Memo",
  opening:
    "This memo is designed to show who is financially powering the campaign, where support is concentrated, and whether the donor base is broad, narrow, local, outside-network, or some mix of the above.",
  geographyTemplate:
    "The donor base is currently strongest in [top_geo_summary]. That can be an advantage when it reflects durable support, but it becomes a structural weakness if the campaign is too dependent on a small geographic cluster.",
  occupationTemplate:
    "The campaign's itemized donor base appears strongest among [top_occupation_summary]. This should be interpreted as a broad support pattern, not as a literal income model for individual donors.",
  concentrationTemplate:
    "The campaign's donor structure currently looks [concentration_read]. High concentration can still support a functioning campaign, but it reduces room for error and makes the finance path more dependent on a narrower donor universe."
};

export const LEADERSHIP_RISK_REPORT_CONTENT = {
  title: "Leadership Risk Brief",
  opening:
    "This brief is designed for senior decision-makers. It highlights the few financial conditions most likely to destabilize the campaign in the near term and ties each condition to a practical choice.",
  riskTemplate: {
    header: "Risk: [risk_title]",
    whyItMatters: "Why it matters: [why_it_matters]",
    drivers: "What is driving it: [driver_summary]",
    nextAction: "What the campaign should do next: [recommended_action]"
  },
  closingVariants: [
    "The campaign is still within a workable range, but only if the next operating period is handled with discipline.",
    "The campaign can still carry the active plan, but the cost of weak execution is rising.",
    "The current finance posture supports caution, not drift.",
    "The campaign should treat the next set of finance decisions as budget decisions, not just activity decisions."
  ]
};

export const FILING_SNAPSHOT_CONTENT = {
  title: "Filing Period Snapshot",
  intro:
    "This report is designed to help the campaign understand how the upcoming filing period is likely to read publicly and what work remains to strengthen that picture before the deadline closes.",
  headlineTemplate:
    "If current commitments convert on schedule, the campaign is positioned to show approximately [expected_filing_position] for the filing period. If not, the public-facing number may understate the campaign's broader finance activity.",
  riskNote:
    "The filing number matters politically, but the campaign should not weaken its longer-term posture simply to create a cleaner short-term appearance."
};

export const CHANNEL_PERFORMANCE_MEMO_CONTENT = {
  title: "Channel Performance Memo",
  opening:
    "This memo is designed to show which finance channels are carrying the current path and which are contributing less than planned.",
  performanceSummaryTemplate:
    "For the current period, the campaign assigned the largest share of its target to [channel]. Actual performance was [result].",
  interpretationTemplate:
    "The current mix is [balanced / overconcentrated / too dependent on underperforming channels].",
  recommendedAdjustmentsHeader: "Recommended Adjustments"
};

export const UNIVERSAL_CLOSING_BLOCK =
  "This report should be used to sharpen judgment and sequence decisions, not to replace campaign leadership. The strongest finance systems do not eliminate uncertainty. They make uncertainty easier to see early, name clearly, and act on in time.";
