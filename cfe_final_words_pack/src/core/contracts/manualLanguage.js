export const MANUAL_TONE_RULES = [
  "Serious.",
  "Calm.",
  "Exact without pretending omniscience.",
  "Campaign-literate.",
  "Dense enough to teach.",
  "Direct enough to be usable under pressure."
];

export const ECOSYSTEM_ALIGNMENT_RULES = [
  "Same respect for canonical calculations as FPE.",
  "Same respect for operator judgment as FPE.",
  "Same preference for dense useful explanation over decorative text.",
  "Same refusal to hide uncertainty with fake smoothness.",
  "Same right-rail and manual teaching standard.",
  "Warnings are decision support, not drama."
];

export const MANUAL_FRONT_PAGE = {
  title: "Campaign Finance Engine Manual",
  opening:
    "This manual is a product surface, not a help afterthought. It is written so finance directors, candidates, campaign managers, and consultants can understand what each CFE page is for, what healthy and weak patterns look like, what not to overread, and what should happen next.",
  context:
    "When there is a choice between sounding sleek and sounding useful, choose useful. When there is a choice between sounding minimal and teaching clearly, choose clear. When there is a choice between false certainty and explicit uncertainty, choose explicit uncertainty."
};

export const MANUAL_USAGE_GUIDANCE =
  "Use this manual to teach judgment. Start with page purpose, then metric meaning, then healthy versus weak patterns, then next action.";

export const PAGE_MANUAL_LIBRARY = {
  overview: {
    title: "Finance Path Dashboard - What the Campaign Must Raise, By When, and Why",
    body:
      "This is the command surface for the campaign funding path. Read timing, checkpoint pressure, reserve condition, and activity carry together. A campaign can look active and still be fragile if money is not arriving before pressure points."
  },
  budget: {
    title: "Budget Builder - Building the Campaign the Finance Plan Must Actually Support",
    body:
      "Define the campaign you are actually trying to fund. Distinguish required, optional, and conditional costs. The goal is not fake precision. The goal is a visible, phase-aware cost structure that can be financed honestly."
  },
  timeline: {
    title: "Spend Timeline - When Money Must Exist, Not Just How Much",
    body:
      "Convert static budget into a calendar of pressure. Ask when costs need to be liquid, not just whether totals look acceptable. The relevant risk month is often the month before the visible problem."
  },
  benchmarks: {
    title: "Historical Benchmarks - What Similar Campaigns Actually Carried",
    body:
      "Use benchmark bands as realism context, not commands. If the plan is above or below historical norms, leadership should explain why and show a path that supports that choice."
  },
  fundingPath: {
    title: "Channel Plan and Funding Path - Where Required Money Has to Come From",
    body:
      "Translate the requirement into channel responsibility. Weak plans hide wishful thinking in one oversized event or one unrealistic assumption. Healthy plans spread load across real channels and real operators."
  },
  financeOperations: {
    title: "Finance Operations - The Work Required for Money to Arrive",
    body:
      "Treat this as production management, not busyness tracking. Meetings on a calendar do not fund a campaign. Completed asks, disciplined follow-up, converted pledges, and received dollars do."
  },
  donorIntelligence: {
    title: "Donor Intelligence - Who Is Funding the Campaign and From Where",
    body:
      "Read donor composition as strategy guidance. Look for concentration, breadth, local depth, and outside dependence. Unknown classification is acceptable. False certainty is not."
  },
  expenditureIntelligence: {
    title: "Expenditure Intelligence - Whether Spend Still Fits Strategy",
    body:
      "Use this page to catch drift early: overhead creep, consultant gravity, and category mix misalignment. Spend should reflect strategy, not habit."
  },
  risks: {
    title: "Risk Console - Where the Finance Plan Is Becoming Fragile",
    body:
      "Each warning should answer trigger, consequence, exposure, and correction. The goal is to act early enough to avoid a worse warning later."
  },
  reports: {
    title: "Reports - Turning Engine Outputs Into Campaign Action",
    body:
      "A strong report states condition, explanation, consequence, and next move. If a report sounds polished but leaves action unclear, it is not finished."
  },
  manual: {
    title: "How to Use CFE - Reading the Finance Engine Like an Operator",
    body:
      "Use CFE as a management instrument: define the plan, phase costs, test realism, generate path, allocate channel responsibility, track execution, then adjust before stress forces corrections."
  },
  settingsDataImports: {
    title: "Settings / Data / Imports - Preserving Trust in the System",
    body:
      "Govern imports, exports, and snapshots so reported, standardized, and modeled values remain distinct and inspectable."
  }
};

export const RIGHT_RAIL_HELPER_BY_PAGE = {
  "/overview": {
    rail_title: "How to read this page",
    rail_body:
      "This page shows whether the active plan is financially supportable under current conditions. Focus on the next checkpoint, reserve condition, safe-funding gap, and whether current activity is carrying the path.",
    good_discipline:
      "When the page turns stronger, protect margin before approving new optional costs.",
    bad_habit:
      "Do not treat pledges or hoped-for event yield as interchangeable with usable cash."
  },
  "/budget": {
    rail_title: "What this page is for",
    rail_body:
      "Define the campaign you are actually trying to fund. The point is visible phase-aware structure, not perfect foresight.",
    good_discipline:
      "Keep optional and conditional costs explicit so later corrections are deliberate.",
    bad_habit:
      "Missing categories create fake optimism; hidden optional costs create fake pressure."
  },
  "/timeline": {
    rail_title: "What matters here",
    rail_body:
      "This page is about timing pressure. Ask when dollars must exist to keep commitments safe, not just how much is needed eventually.",
    good_discipline:
      "Use this page to protect the month before visible pressure.",
    bad_habit:
      "Do not wait for a stress month to start financing its commitments."
  },
  "/benchmarks": {
    rail_title: "How to use history well",
    rail_body:
      "Use benchmarks to test realism, not replace strategy. Reference bands are context, not commands.",
    good_discipline:
      "Explain intentional departures from historical ranges in operational terms.",
    bad_habit:
      "Do not cite benchmark averages as a substitute for an executable channel path."
  },
  "/funding-path": {
    rail_title: "What to look for",
    rail_body:
      "This page should answer where required money comes from and who carries each share of production.",
    good_discipline:
      "If one channel carries large load, verify activity ownership and conversion support.",
    bad_habit:
      "Do not let one channel become the default rescue assumption for the whole path."
  },
  "/finance-operations": {
    rail_title: "What counts as progress",
    rail_body:
      "Production is completed asks, follow-up, conversion, and received dollars, not calendar volume.",
    good_discipline:
      "Treat follow-up completion as production accountability by owner.",
    bad_habit:
      "Do not confuse busy schedules with path-carrying output."
  },
  "/donor-intelligence": {
    rail_title: "How to interpret donor patterns",
    rail_body:
      "Read donor intelligence as strategy guidance on concentration, breadth, local strength, and openings for expansion.",
    good_discipline:
      "Use patterns to widen the finance structure before concentration hardens.",
    bad_habit:
      "Do not overclaim social certainty from imperfect classification."
  },
  "/expenditure-intelligence": {
    rail_title: "What this page should prevent",
    rail_body:
      "Catch spend distortion early: overhead creep, consultant gravity, and category drift away from strategy.",
    good_discipline:
      "Compare spend mix against stated strategy every operating period.",
    bad_habit:
      "Do not let repeated spend habits replace explicit strategic priorities."
  },
  "/risks": {
    rail_title: "How to use warnings well",
    rail_body:
      "Start with trigger, identify threatened campaign function, then act on the most controllable correction.",
    good_discipline:
      "Use warnings early enough to avoid worse downstream conditions.",
    bad_habit:
      "Do not read severity without reading cause and recommended action."
  },
  "/reports": {
    rail_title: "What a good report should do",
    rail_body:
      "A good report states condition, why it exists, what it threatens, and what should happen next.",
    good_discipline:
      "Block export until the next move is clear and snapshot context is current.",
    bad_habit:
      "Do not ship polished narrative that leaves decisions vague."
  },
  "/manual": {
    rail_title: "How to use this manual",
    rail_body:
      "Use this manual to learn judgment, not just labels. It should clarify healthy, weak, and risky conditions in campaign terms.",
    good_discipline:
      "Tie manual reading directly to weekly planning and report interpretation.",
    bad_habit:
      "Do not treat manual content as optional after onboarding."
  },
  "/settings-data-imports": {
    rail_title: "Why this page matters",
    rail_body:
      "Use this page to protect data integrity. Keep reported, standardized, and modeled values distinct so downstream warnings and reports stay trustworthy.",
    good_discipline:
      "Validate provenance and contracts before promoting imports into active scenario workflows.",
    bad_habit:
      "Do not flatten trust labels or bypass validation to move faster."
  }
};

export const MANUAL_SECTIONS = {
  financePathDashboard: PAGE_MANUAL_LIBRARY.overview,
  budgetBuilder: PAGE_MANUAL_LIBRARY.budget,
  spendTimeline: PAGE_MANUAL_LIBRARY.timeline,
  historicalBenchmarks: PAGE_MANUAL_LIBRARY.benchmarks,
  channelPlan: PAGE_MANUAL_LIBRARY.fundingPath,
  financeOperations: PAGE_MANUAL_LIBRARY.financeOperations,
  donorIntelligence: PAGE_MANUAL_LIBRARY.donorIntelligence,
  expenditureIntelligence: PAGE_MANUAL_LIBRARY.expenditureIntelligence,
  riskConsole: PAGE_MANUAL_LIBRARY.risks,
  reports: PAGE_MANUAL_LIBRARY.reports,
  manualGuide: PAGE_MANUAL_LIBRARY.manual,
  settingsDataImports: PAGE_MANUAL_LIBRARY.settingsDataImports
};

export const PAGE_MANUAL_GUIDANCE = {
  overview: {
    what_this_page_is_for:
      "Command surface for what the campaign must raise, by when, and whether current execution is safely carrying the plan.",
    how_to_read:
      "Read checkpoint pressure, reserve condition, and activity carry before reading vanity totals.",
    strong_condition:
      "On Path with preserved reserve flexibility and no immediate timing contradiction.",
    weak_condition:
      "Behind path with narrowing reserve and commitments depending on unconverted assumptions.",
    what_to_do_next:
      "Protect next checkpoint and reserve before expanding optional commitments.",
    limits:
      "Dashboard condition is a summary, not a replacement for line-level review."
  },
  budget: {
    what_this_page_is_for:
      "Define the campaign cost structure the finance path must honestly support.",
    how_to_read:
      "Verify required versus optional versus conditional lines and phase timing by domain.",
    strong_condition:
      "Major domains are visible, phased, and prioritized without hidden stretch assumptions.",
    weak_condition:
      "Core and optional costs are blended, timing is vague, and reserve is treated as afterthought.",
    what_to_do_next:
      "Clarify conditional lines and rephase early pressure before path recompute.",
    limits:
      "Budget realism helps planning but does not prove execution capacity by itself."
  },
  timeline: {
    what_this_page_is_for:
      "Show when campaign cash pressure appears and where commitments bunch together.",
    how_to_read:
      "Start with peak pressure windows and reserve stress, then inspect prior-month lead indicators.",
    strong_condition:
      "Costs and likely receipts remain phase-aligned with preserved operating flexibility.",
    weak_condition:
      "Commitments arrive before likely cash and force reactive sequencing decisions.",
    what_to_do_next:
      "Bring forward controllable production and delay discretionary pressure windows.",
    limits:
      "Modeled timing improves judgment but must be refreshed when assumptions change."
  },
  benchmarks: {
    what_this_page_is_for:
      "Provide historical realism context for the active scenario.",
    how_to_read:
      "Use floor, competitive threshold, and likely band as reference, not deterministic commands.",
    strong_condition:
      "Scenario assumptions are either in range or intentionally out of range with clear justification.",
    weak_condition:
      "Scenario relies on historically difficult assumptions without corresponding channel proof.",
    what_to_do_next:
      "Either strengthen supporting execution logic or trim unsupported scope.",
    limits:
      "Historical analogs inform but cannot replace campaign-specific strategy and operations."
  },
  fundingPath: {
    what_this_page_is_for:
      "Translate required funding into practical checkpoints and channel responsibility.",
    how_to_read:
      "Compare gross path, checkpoint timing, reserve condition, and channel balance together.",
    strong_condition:
      "Requirement is distributed across executable channels with owned activity plans.",
    weak_condition:
      "Path depends on one outsized source or one period of perfect execution.",
    what_to_do_next:
      "Rebalance channel load and protect the next checkpoint before adding new fixed commitments.",
    limits:
      "Path quality still depends on completion and conversion in Finance Operations."
  },
  financeOperations: {
    what_this_page_is_for:
      "Track the production work that turns modeled path requirements into real money.",
    how_to_read:
      "Review completed asks, follow-up, conversion, and received dollars against planned output.",
    strong_condition:
      "High-yield activities are completed with disciplined follow-through and visible conversion.",
    weak_condition:
      "Calendar activity looks busy but completion and conversion lag path needs.",
    what_to_do_next:
      "Cut low-value work and enforce owner-level accountability on top-yield tasks.",
    limits:
      "Recorded activity without conversion should not be treated as financial safety."
  },
  donorIntelligence: {
    what_this_page_is_for:
      "Interpret donor structure for resilience, concentration risk, and expansion opportunity.",
    how_to_read:
      "Prioritize concentration, local depth, and underdeveloped donor terrain.",
    strong_condition:
      "Production is supported by a broad enough base to absorb softness in one segment.",
    weak_condition:
      "Too much path stability depends on a narrow cluster of donors or networks.",
    what_to_do_next:
      "Use findings to widen host strategy and assignment coverage.",
    limits:
      "Classification is directional and should not be used as false social certainty."
  },
  expenditureIntelligence: {
    what_this_page_is_for:
      "Check whether actual spending still matches declared strategy and path discipline.",
    how_to_read:
      "Compare spend mix, overhead load, and variance against budget priorities.",
    strong_condition:
      "Spend remains aligned to strategic spine and avoids avoidable overhead drift.",
    weak_condition:
      "Category drift is crowding out core program needs.",
    what_to_do_next:
      "Freeze non-core expansion and restore strategic category protection.",
    limits:
      "Spend diagnostics do not capture every qualitative tradeoff, but they expose structural drift."
  },
  risks: {
    what_this_page_is_for:
      "Provide trigger-based early warnings with concrete correction paths.",
    how_to_read:
      "For each risk, read trigger, consequence, and immediate action as one unit.",
    strong_condition:
      "Few elevated warnings and rapid corrective action where warnings appear.",
    weak_condition:
      "Multiple active warnings across pace, reserve, and execution with unresolved actions.",
    what_to_do_next:
      "Act in severity order on controllable fixes before next checkpoint.",
    limits:
      "Warnings are decision support, not guaranteed forecasts."
  },
  reports: {
    what_this_page_is_for:
      "Create circulation-ready outputs that preserve canonical truth and practical guidance.",
    how_to_read:
      "Confirm snapshot freshness, section completeness, and action clarity before export.",
    strong_condition:
      "Report can circulate without rewrite and clearly states condition, cause, and next move.",
    weak_condition:
      "Report is polished but vague, or unsupported by current snapshot context.",
    what_to_do_next:
      "Resolve missing sections and regenerate from canonical snapshots.",
    limits:
      "Narrative quality cannot compensate for incomplete underlying data."
  },
  manual: {
    what_this_page_is_for:
      "Teach operators how to interpret CFE outputs under real campaign pressure.",
    how_to_read:
      "Move page by page from purpose to interpretation to correction behavior.",
    strong_condition:
      "Users can explain why metrics matter and what action each condition implies.",
    weak_condition:
      "Users memorize labels but cannot act from the signals.",
    what_to_do_next:
      "Use manual sections as weekly planning and review scaffolding.",
    limits:
      "Manual supports leadership judgment; it does not replace it."
  },
  settingsDataImports: {
    what_this_page_is_for:
      "Keep data and snapshots trustworthy through explicit governance controls.",
    how_to_read:
      "Validate provenance, contract status, and trust-label separation before activating new data.",
    strong_condition:
      "Imports are validated, outputs are labeled, and snapshots roundtrip cleanly.",
    weak_condition:
      "Unvalidated data or flattened labels blur what is reported versus modeled.",
    what_to_do_next:
      "Resolve validation failures before promoting data to active scenario workflows.",
    limits:
      "Governance surfaces protect integrity but cannot fix poor source capture on their own."
  }
};

export const OPERATOR_MISTAKES = [
  "Treating pledges and usable cash as interchangeable.",
  "Expanding commitments when reserve flexibility is thinning.",
  "Using benchmark averages as commands rather than realism context.",
  "Confusing schedule volume with production quality.",
  "Allowing channel concentration to harden before widening the base.",
  "Using polished reports to hide unclear next actions."
];

export const HEALTHY_RANGE_GUIDANCE = [
  "Building real flexibility, not short-term relief.",
  "Protecting next checkpoint rather than borrowing from it.",
  "Carrying the path through real execution, not symbolic effort.",
  "Holding condition with narrow but manageable cushion.",
  "Below safe timing requirements and needing correction.",
  "Structurally overconcentrated and fragile without diversification."
];
