import {
  EMPTY_STATES,
  EXPENDITURE_INTELLIGENCE_SURFACE,
  STATE_MATRIX
} from "../../core/contracts/uiCopy.js";
import { EMPTY_STATE_WARNINGS, EXPENDITURE_WARNINGS } from "../../core/contracts/warningLanguage.js";

/**
 * @param {Record<string, unknown>} summary
 */
function expenditureState(summary) {
  if (summary.timing_mismatch === true) {
    return STATE_MATRIX.expenditure.timingMismatch;
  }

  const overheadShare = typeof summary.overhead_share === "number" ? summary.overhead_share : 0;
  const consultantShare = typeof summary.consultant_share === "number" ? summary.consultant_share : 0;

  if (overheadShare > 0.35 || consultantShare > 0.25) {
    return STATE_MATRIX.expenditure.topHeavyMix;
  }

  return STATE_MATRIX.expenditure.balancedMix;
}

/**
 * @param {Record<string, unknown> | null} summary
 */
function spendWarnings(summary) {
  if (!summary || typeof summary !== "object") {
    return [EMPTY_STATE_WARNINGS.noExpenditureCategorization];
  }

  /** @type {Array<{title: string, body: string}>} */
  const warnings = [];
  const overheadShare = typeof summary.overhead_share === "number" ? summary.overhead_share : null;
  const fieldShare = typeof summary.field_share === "number" ? summary.field_share : null;

  if (overheadShare != null && overheadShare > 0.35) {
    warnings.push(EXPENDITURE_WARNINGS.overheadHeavy);
  }
  if (fieldShare != null && fieldShare < 0.15) {
    warnings.push(EXPENDITURE_WARNINGS.fieldUnderweight);
  }
  if (summary.timing_mismatch === true) {
    warnings.push(EXPENDITURE_WARNINGS.timingMismatch);
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
      body: EXPENDITURE_INTELLIGENCE_SURFACE.body,
      spend_mix_cards: EXPENDITURE_INTELLIGENCE_SURFACE.spendMixCards,
      interpretation_block: EXPENDITURE_INTELLIGENCE_SURFACE.interpretationBlock,
      vendor_panel: EXPENDITURE_INTELLIGENCE_SURFACE.vendorPanel,
      spending_summary: spendingSummary,
      state_banner: spendingSummary ? expenditureState(spendingSummary) : null,
      warnings: spendWarnings(spendingSummary),
      empty_state:
        spendingSummary == null ? EXPENDITURE_INTELLIGENCE_SURFACE.emptyState : EMPTY_STATES.spending
    };
  }
};
