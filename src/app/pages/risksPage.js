import { EMPTY_STATES } from "../../core/contracts/uiCopy.js";
import { EMPTY_WARNING_STATE } from "../../core/contracts/warningLanguage.js";

/**
 * @param {import('../../core/contracts/types.js').RiskFlag[]} flags
 */
function formatRiskCards(flags) {
  return flags.map((flag) => ({
    id: flag.id,
    severity: flag.severity,
    risk_type: flag.flag_type,
    title: flag.title,
    cause: flag.explanation,
    impact:
      "If unaddressed, this condition can undermine funding path reliability relative to upcoming commitments.",
    trigger: {
      metric: flag.trigger_metric,
      value: flag.trigger_value
    },
    recommended_action: flag.recommended_action,
    state: flag.status
  }));
}

export const risksPage = {
  id: "risks",
  title: "Risks",
  render(state) {
    const cards = formatRiskCards(state.snapshots.riskFlags);
    const diagnostics = state.snapshots.diagnostics;

    return {
      header: "Risks",
      body:
        "Concentrated warning surface for canonical risks, with explicit trigger context and near-term action guidance.",
      module_intro:
        "Risk severity is only useful when paired with cause, impact, and actionable correction.",
      active_risks: cards,
      warning_hierarchy: {
        good: "Calm confidence",
        caution: "Meaningful friction",
        bad: "Clear operational concern",
        unknown: "Visible uncertainty"
      },
      diagnostics_summary: diagnostics,
      empty_state:
        cards.length === 0
          ? {
              summary: EMPTY_STATES.risks,
              warning: EMPTY_WARNING_STATE
            }
          : null
    };
  }
};
