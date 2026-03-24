import { roundMoney } from "../contracts/types.js";

/**
 * @param {import('../contracts/types.js').BudgetLine[]} budgetLines
 */
export function computeBudgetSummary(budgetLines) {
  const totalPlannedBudget = roundMoney(
    budgetLines.reduce((sum, line) => sum + line.planned_amount, 0)
  );

  const requiredBudget = roundMoney(
    budgetLines
      .filter((line) => line.required_flag)
      .reduce((sum, line) => sum + line.planned_amount, 0)
  );

  const optionalBudget = roundMoney(totalPlannedBudget - requiredBudget);

  /** @type {Record<string, number>} */
  const domainTotals = {};
  for (const line of budgetLines) {
    domainTotals[line.domain] = roundMoney((domainTotals[line.domain] ?? 0) + line.planned_amount);
  }

  /** @type {Record<string, number>} */
  const domainShares = {};
  for (const [domain, total] of Object.entries(domainTotals)) {
    domainShares[domain] = totalPlannedBudget === 0 ? 0 : roundMoney(total / totalPlannedBudget);
  }

  return {
    total_planned_budget: totalPlannedBudget,
    required_budget: requiredBudget,
    optional_budget: optionalBudget,
    required_cost_share: totalPlannedBudget === 0 ? 0 : roundMoney(requiredBudget / totalPlannedBudget),
    optional_cost_share: totalPlannedBudget === 0 ? 0 : roundMoney(optionalBudget / totalPlannedBudget),
    domain_totals: domainTotals,
    domain_shares: domainShares
  };
}
