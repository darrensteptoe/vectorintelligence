export const REPORT_TONE_RULES = [
  "Direct, evidence-based, and useful.",
  "Written for real internal circulation.",
  "Strong enough for leadership and plain enough for candidates.",
  "Interpretive without pretending certainty.",
  "Never padded, generic, or machine-flat.",
  "Every risk statement should imply a next move."
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
    "remains on its active finance path",
    "operating from a controlled position rather than a reactive one",
    "holding in a disciplined range"
  ],
  mixed: [
    "remains viable, but the margin for error has narrowed",
    "still in range, but carrying more stress than the dashboard alone suggests",
    "workable for now, though less forgiving"
  ],
  weak: [
    "is currently behind the modeled finance path",
    "is carrying a mismatch between required timing and actual production",
    "is becoming increasingly difficult to execute on schedule"
  ]
};

export const REPORT_PREFACE_VARIANTS = {
  standard:
    "This report is designed to show what the campaign is trying to fund, how current production compares with that requirement, and where timing or execution risk may pressure the plan next.",
  benchmarkHeavy:
    "This report combines the campaign's active budget and finance condition with historical evidence from comparable races. Benchmarks are realism context, not a substitute for campaign strategy.",
  candidateFacing:
    "This briefing is designed to focus the candidate on the finance work that matters most in the current period."
};

export const WEEKLY_FINANCE_MEMO_CONTENT = {
  title: "Weekly Finance Memo",
  executiveSummaryTemplates: {
    onPath:
      "The campaign remains on its active finance path for the current period. Raise pace, activity completion, and reserve status are all broadly consistent with the selected budget scenario. This does not remove pressure, but it means the campaign is still operating from a controlled position rather than a reactive one.",
    watch:
      "The campaign remains viable under the active finance path, but the margin for error has narrowed. Current performance is still within range, though reserve flexibility, activity completion, or one or more channels are carrying more stress than the overall dashboard alone may suggest. The campaign should treat the next period as important for rebuilding cushion rather than assuming the path will continue to hold automatically.",
    offPath:
      "The campaign is currently behind the modeled finance path for the active scenario. The gap is not merely a summary number; it reflects a mismatch between required funding timing and actual production. Unless the campaign increases channel output, improves activity completion, or rephases selected costs, the current plan becomes increasingly difficult to execute on schedule.",
    redline:
      "The active finance path is currently in a redline condition. Under present assumptions, the campaign is not cash-safe relative to its planned commitments and reserve requirements. This does not mean the campaign cannot recover, but it does mean leadership should treat the current path as unstable until corrective action is taken."
  },
  fundingStatusTemplate:
    "The current raise path calls for [target_period_amount] during this period. The campaign recorded [actual_period_amount], leaving a period variance of [variance_amount].",
  raisePaceParagraph:
    "The campaign's raise pace should be read in relation to timing, not vanity totals. A strong gross week or month matters only insofar as it supports the next real funding checkpoint. When the campaign is ahead of pace, that surplus should be read as preserved flexibility, not permission to lose discipline. When the campaign is behind, the key question is which channels and activities are failing to carry their share of the requirement.",
  activityReadTemplate:
    "Finance activity should be evaluated as production, not busyness. The relevant standard is not whether the candidate or finance team felt fully booked. The relevant standard is whether scheduled asks, meetings, events, and follow-up converted into the volume and timing of money required by the path.",
  pledgeReadTemplate:
    "Reserve status remains one of the clearest indicators of whether the campaign is truly in control of its plan. Campaigns with weak reserves are often tempted to overread strong gross periods while ignoring the fragility underneath. Strong reserve status does not remove pressure, but it materially improves decision quality and protects the campaign from routine variance.",
  riskReadTemplates: [
    "Treat reserve softness as a decision-quality issue, not just a cushion issue.",
    "A path can look active while still being fragile if money arrives after pressure points.",
    "Production concentration should be corrected before it becomes structural dependence."
  ],
  closingActionParagraph:
    "The campaign's immediate priority for the next period should be to protect the next checkpoint rather than admire the current summary.",
  defaultActions: [
    "Increase near-term production in the most controllable channels.",
    "Improve follow-up conversion on money already in the pipeline.",
    "Prevent operational commitments from getting ahead of cash safety."
  ]
};

export const CANDIDATE_BRIEF_CONTENT = {
  title: "Candidate Brief",
  opening:
    "This briefing is designed to focus the candidate on the finance work that matters most in the current period. The goal is not to review every available number. The goal is to clarify the practical work that must happen next in order to keep the campaign on its funding path.",
  currentPositionTemplate:
    "The campaign is currently [path_status] against the active finance path. The immediate goal is to secure [near_term_goal] before the next budget pressure point.",
  callTimeLanguage:
    "The candidate's call time target should be treated as a production responsibility, not a symbolic obligation. When the call time target is missed, the campaign usually feels the impact later through weaker reserve status, delayed commitments, or greater dependence on events and outside rescue.",
  topAsksLanguage:
    "The top asks listed here are not merely the largest names available. They are the asks most relevant to the campaign's immediate path pressure.",
  priorities: [
    "Prioritize asks that materially affect the next checkpoint, reserve condition, or channel balance.",
    "Treat follow-up as part of fundraising, not optional cleanup.",
    "Protect candidate time for the highest-yield asks and meetings.",
    "Do not let low-probability asks crowd out near-term production work."
  ],
  toneVariants: {
    steady: "The path is still workable, but this period needs disciplined execution.",
    urgent: "The campaign can recover ground, but only with stronger near-term production.",
    positive: "There is a real opportunity to improve condition if follow-up and top asks are executed now."
  },
  close:
    "The candidate should leave this briefing understanding three things clearly: what needs to be raised next, who is central to that effort, and what follow-up cannot be allowed to drift."
};

export const FINANCE_COMMITTEE_BRIEF_CONTENT = {
  title: "Finance Committee Brief",
  intro:
    "The finance committee's role is to expand the campaign's production capacity, not merely to lend credibility. This memo is intended to make responsibility legible by showing where the committee is carrying meaningful load, where it is underperforming, and where follow-up or host development is needed.",
  accountabilityTemplate:
    "Committee performance should be judged on real activity and resulting production: asks completed, meetings held, hosts activated, commitments advanced, and dollars converted. Soft participation without measurable movement should not be mistaken for finance strength.",
  actionHeader: "What the Committee Should Do Next",
  actions: [
    "Reduce concentration risk by widening active host and ask coverage.",
    "Strengthen the event pipeline where it can affect the next checkpoint.",
    "Move unresolved commitments toward specific dates and amounts.",
    "Prioritize disciplined follow-up over one-time outreach."
  ]
};

export const BUDGET_HEALTH_REPORT_CONTENT = {
  title: "Leadership Budget Health Report",
  opening:
    "This memo is intended to show whether the campaign's operating plan remains financially supportable under current conditions. The goal is not simply to summarize current cash or gross raised. The goal is to clarify whether staffing, field scale, consultant load, and other major commitments remain aligned with what the campaign can responsibly fund.",
  budgetRealismTemplate:
    "Relative to comparable races, the active budget appears [realism_status].",
  timingPressureTemplate:
    "The most important upcoming cost window falls in [pressure_window]. Leadership should protect [safely_fundable_summary] and avoid expanding [less_secure_summary] until condition improves.",
  safelyFundableTemplate:
    "At the current pace and reserve posture, the campaign can safely support [safely_fundable_summary]. The portions of the plan that remain less secure are [less_secure_summary].",
  fieldAdequatelyFunded:
    "The current finance path is sufficient to support the selected field scenario under present assumptions. This does not remove the need for continued pace discipline, but it means the campaign is not presently trying to execute a field plan that finance cannot carry.",
  fieldPartiallyFunded:
    "The active finance path supports only part of the selected field scenario with a comfortable margin. Leadership should read this as a caution condition rather than a technical success.",
  fieldNotSafelyFunded:
    "The current finance path does not safely support the selected field scenario. Leadership should assume that expansion, hiring, or continued scale is exposing the campaign to avoidable financial stress unless production increases or the scenario is rephased.",
  closingActionParagraph:
    "The right decision standard is not whether the campaign wants the larger plan. It is whether the campaign can support that plan without sacrificing reserve protection or forcing emergency corrections later."
};

export const DONOR_INTELLIGENCE_MEMO_CONTENT = {
  title: "Donor Intelligence Memo",
  opening:
    "This memo explains who is funding the campaign, from where, and with what degree of concentration. It should be read as coalition intelligence for the finance program, not as a sociological claim about the entire electorate or a false-precise portrait of every donor.",
  geographyTemplate:
    "A broad in-district donor base usually improves resilience, local credibility, and host strategy. Current geographic read: [top_geo_summary].",
  occupationTemplate:
    "Occupation and sector summaries help identify the social structure of the donor base. Current sector read: [top_occupation_summary].",
  concentrationTemplate:
    "Current concentration interpretation: [concentration_read]. High concentration can still carry a period, but it reduces tolerance for underperformance.",
  closing:
    "The strongest use of donor intelligence is strategic: widening the base, reducing dependence, identifying underdeveloped host networks, and improving understanding of who is actually carrying the finance operation."
};

export const LEADERSHIP_RISK_REPORT_CONTENT = {
  title: "Leadership Risk Brief",
  opening:
    "This report identifies the areas where the campaign's finance condition is becoming fragile. It should not be read as a list of abstractions. Each risk shown here has practical implications for staffing, scheduling, reserve protection, or the campaign's ability to execute its selected plan without distortion.",
  riskTemplate: {
    header: "Risk: [risk_title]",
    whyItMatters: "Why it matters: [why_it_matters]",
    drivers: "What is driving it: [driver_summary]",
    nextAction: "What the campaign should do next: [recommended_action]"
  },
  closingVariants: [
    "The objective is not to eliminate all risk at all times. The objective is to make risk visible early enough that the campaign can choose its corrections rather than receive them under pressure.",
    "Risk discipline means acting while choices still exist.",
    "The campaign should treat this report as a sequencing tool, not a postmortem."
  ]
};

export const FILING_SNAPSHOT_CONTENT = {
  title: "Filing Period Snapshot",
  intro:
    "This report is designed to frame the campaign's current filing condition in practical terms. It shows not only what has already landed, but what is likely to be visible, what may arrive too late to strengthen the headline, and how the campaign compares to historically relevant analogs.",
  headlineTemplate:
    "If current commitments convert on schedule, the campaign is positioned to show approximately [expected_filing_position] for the filing period.",
  strongRead:
    "The campaign is positioned to post a filing that supports the current finance narrative.",
  mixedRead:
    "The filing condition is mixed. The headline may still be usable, but the underlying shape requires careful explanation.",
  weakRead:
    "The campaign is at risk of posting a filing that does not adequately support the active finance story.",
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
  "Use this report to sharpen judgment and sequence decisions, not to replace campaign leadership. The strongest finance systems do not remove uncertainty; they make uncertainty visible early enough to act in time.";
