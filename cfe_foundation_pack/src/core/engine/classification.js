/**
 * @typedef {{pattern: RegExp, value: string}} FuzzyRule
 */

/**
 * Resolution order is fixed by product rule:
 * manual override > exact rule > fuzzy rule > unknown
 *
 * @param {{
 *   rawValue: string,
 *   manualOverrideValue?: string,
 *   exactRules?: Record<string, string>,
 *   fuzzyRules?: FuzzyRule[]
 * }} input
 * @returns {import('../contracts/types.js').ClassificationResult}
 */
export function resolveClassification(input) {
  const normalizedRaw = input.rawValue.trim();

  if (input.manualOverrideValue && input.manualOverrideValue.trim()) {
    return {
      value: input.manualOverrideValue.trim(),
      status: "Confirmed",
      confidence: "High",
      resolution_source: "manual override",
      manual_override_used: true
    };
  }

  const exactMatch = input.exactRules?.[normalizedRaw.toLowerCase()];
  if (exactMatch) {
    return {
      value: exactMatch,
      status: "Auto-classified",
      confidence: "High",
      resolution_source: "exact rule",
      manual_override_used: false
    };
  }

  for (const rule of input.fuzzyRules ?? []) {
    if (rule.pattern.test(normalizedRaw)) {
      return {
        value: rule.value,
        status: "Auto-classified",
        confidence: "Medium",
        resolution_source: "fuzzy rule",
        manual_override_used: false
      };
    }
  }

  return {
    value: "Unknown",
    status: "Unknown",
    confidence: "Low",
    resolution_source: "unknown",
    manual_override_used: false
  };
}
