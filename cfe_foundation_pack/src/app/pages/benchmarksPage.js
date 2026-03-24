import { EMPTY_STATES } from "../../core/contracts/uiCopy.js";

export const benchmarksPage = {
  id: "benchmarks",
  title: "Benchmarks",
  render(state) {
    return {
      benchmark_set: state.benchmarkSet ?? null,
      empty_state: state.benchmarkSet == null ? EMPTY_STATES.benchmarks : null
    };
  }
};
