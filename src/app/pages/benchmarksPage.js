import { EMPTY_STATES } from "../../core/contracts/uiCopy.js";

/**
 * @param {Record<string, unknown> | null} benchmarkSet
 */
function benchmarkRead(benchmarkSet) {
  if (benchmarkSet == null) {
    return null;
  }

  const credibilityFloor = typeof benchmarkSet.credibility_floor === "number" ? benchmarkSet.credibility_floor : null;
  const competitiveThreshold =
    typeof benchmarkSet.competitive_threshold === "number" ? benchmarkSet.competitive_threshold : null;

  return {
    credibility_floor: credibilityFloor,
    competitive_threshold: competitiveThreshold,
    realism_note:
      "Benchmarks are evidence inputs for realism checks. They do not replace campaign judgment or scenario planning.",
    weak_analog_warning:
      "If comparable rationale is thin, treat benchmark outputs as directional context rather than hard bounds."
  };
}

export const benchmarksPage = {
  id: "benchmarks",
  title: "Benchmarks",
  render(state) {
    const benchmarkSet = state.benchmarkSet ?? null;

    return {
      header: "Benchmarks",
      body:
        "Use comparable race evidence to pressure-test assumptions about budget realism, timing, and required pace.",
      module_intro:
        "Comparables are context, not magic truth. Keep weak analogs visible and interpreted as weak.",
      benchmark_set: benchmarkSet,
      benchmark_interpretation: benchmarkRead(benchmarkSet),
      acceptance_checks: [
        "Comparable rationale is visible.",
        "Weak analogs remain labeled as weak.",
        "Thresholds are treated as evidence, not destiny."
      ],
      empty_state: benchmarkSet == null ? EMPTY_STATES.benchmarks : null
    };
  }
};
