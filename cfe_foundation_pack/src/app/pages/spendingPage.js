import {
  EXPENDITURE_INTELLIGENCE_SURFACE,
  GLOBAL_EMPTY_STATES
} from "../../core/contracts/uiCopy.js";
import { EMPTY_STATE_WARNINGS, EXPENDITURE_WARNINGS } from "../../core/contracts/warningLanguage.js";

/**
 * @param {Record<string, unknown> | null} summary
 */
function spendWarnings(summary) {
  if (!summary || typeof summary !== "object") {
    return [EMPTY_STATE_WARNINGS.noExpenditureCategorization];
  }

  /** @type {string[]} */
  const warnings = [];
  const overheadShare = typeof summary.overhead_share === "number" ? summary.overhead_share : null;
  const fieldShare = typeof summary.field_share === "number" ? summary.field_share : null;

  if (overheadShare != null && overheadShare > 0.35) {
    warnings.push(EXPENDITURE_WARNINGS.overheadHeavy.body);
  }
  if (fieldShare != null && fieldShare < 0.15) {
    warnings.push(EXPENDITURE_WARNINGS.fieldUnderweight.body);
  }
  if (summary.timing_mismatch === true) {
    warnings.push(EXPENDITURE_WARNINGS.timingMismatch.body);
  }

  return warnings;
}

export const spendingPage = {
  id: "expenditure-intelligence",
  title: "Expenditure Intelligence",
  render(state) {
    const spendingSummary = state.spendMixSummary ?? null;

    return {
      header: EXPENDITURE_INTELLIGENCE_SURFACE.header,
      subheader: EXPENDITURE_INTELLIGENCE_SURFACE.subheader,
      intro: EXPENDITURE_INTELLIGENCE_SURFACE.intro,
      spending_summary: spendingSummary,
      warnings: spendWarnings(spendingSummary),
      empty_state: spendingSummary == null ? GLOBAL_EMPTY_STATES.noHistoricalData : null
    };
  }
};
