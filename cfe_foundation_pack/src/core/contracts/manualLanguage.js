export const MANUAL_INTRO =
  "Campaign Finance Engine is designed to answer a practical question campaigns confront every day: what are we trying to fund, when do those costs hit, and are we doing enough to support the plan? It is not just a record of receipts and spending. It is a budget-path and finance execution system built to help campaigns fund real operating plans with discipline.";

export const FULL_MANUAL_FRONT_MATTER =
  "Campaign Finance Engine is built for campaigns that need to fund real plans, not admire spreadsheets. The purpose of the system is to help leadership understand what the campaign is trying to fund, when those costs hit, whether history suggests the plan is realistic, and what the finance operation must do next to support it.";

export const MANUAL_MODULE_COPY = {
  raceSetup: {
    what:
      "This is where the campaign defines the environment it is operating in: office, district, timing, filing cadence, and campaign condition.",
    how:
      "Set this up carefully and keep it current. Errors here travel downstream into benchmarks, timing, and reporting.",
    healthy:
      "A healthy setup has a clean calendar, clear office context, and a selected scenario that reflects the real campaign plan rather than an aspirational placeholder."
  },
  budget: {
    what:
      "This module is where the campaign turns intention into a real spending plan. A budget is not just a topline number. It is a set of commitments that will hit at different times and create different levels of pressure on cash.",
    how:
      "Build the budget honestly. Mark what is required, what is optional, and what can wait.",
    healthy:
      "A healthy budget distinguishes core program needs from optional enhancements.",
    weak:
      "A weak budget is padded in some places, too vague in others, and unrealistic about when costs will hit."
  },
  timeline: {
    what:
      "The timeline is where abstract budget numbers become real campaign pressure.",
    how:
      "Use this view to see when cash pressure peaks, when reserve matters most, and which spending windows require fundraising to land early rather than late."
  },
  benchmarks: {
    what:
      "Benchmarks are a realism layer.",
    how:
      "A plan that differs from history is not automatically wrong, but it should usually be different for a reason, not by accident."
  },
  fundingPath: {
    what:
      "This is the engine's core answer to what must be raised and by when.",
    how:
      "When the path is under pressure, focus first on the next real checkpoint rather than arguing abstractly about the final total."
  },
  channels: {
    what:
      "This module shows how the campaign expects to cover the path across channels.",
    healthy:
      "A healthy channel plan is diversified enough that one soft week in one channel does not destabilize the full path."
  },
  activity: {
    what: "This is where the campaign tracks the work that actually produces money.",
    how:
      "Schedule the work, complete the work, record the outcomes, and follow up faster than the campaign thinks it needs to."
  },
  bridge: {
    what:
      "The field-to-finance bridge exists to keep the campaign grounded. Field plans create real cost demand. Finance plans determine whether those demands are safely supportable.",
    whyNarrow:
      "The bridge is intentionally narrow so each system stays stable. Use it to inform timing and affordability, not to blur the two engines together."
  }
};

export const MANUAL_INTERPRETATION_NOTES = {
  warning:
    "When the engine raises a caution or warning, the most important question is whether the explanation matches campaign reality and whether the recommended action is practical.",
  unknown:
    "Unknown is not a flaw by itself. Unknown means the system is refusing to pretend it knows something it does not. Use review queues to improve the highest-impact unknowns first."
};

export const HEALTHY_INTERPRETATION_LANGUAGE = [
  "healthier than planned",
  "in range",
  "tighter than preferred",
  "materially behind",
  "unusually concentrated",
  "heavier than the historical norm"
];
