import { makeId, nowIso, roundMoney } from "../contracts/types.js";
import { monthFromIso, monthsBetween, peakMonth, sumThroughMonth } from "./time.js";

/**
 * @param {string[]} months
 * @param {string} pattern
 * @param {Record<string, number> | undefined} customWeights
 * @returns {Record<string, number>}
 */
function patternWeights(months, pattern, customWeights) {
  /** @type {Record<string, number>} */
  const weights = {};

  if (pattern === "Custom" && customWeights) {
    for (const month of months) {
      weights[month] = Math.max(0, Number(customWeights[month] ?? 0));
    }
    const sum = Object.values(weights).reduce((acc, value) => acc + value, 0);
    if (sum > 0) {
      return weights;
    }
  }

  if (pattern === "One-time") {
    for (const month of months) {
      weights[month] = month === months[0] ? 1 : 0;
    }
    return weights;
  }

  if (pattern === "Front-loaded") {
    for (let i = 0; i < months.length; i += 1) {
      weights[months[i]] = months.length - i;
    }
    return weights;
  }

  if (pattern === "Back-loaded") {
    for (let i = 0; i < months.length; i += 1) {
      weights[months[i]] = i + 1;
    }
    return weights;
  }

  if (pattern === "Milestone-based") {
    for (const month of months) {
      weights[month] = 0;
    }
    if (months.length === 1) {
      weights[months[0]] = 1;
      return weights;
    }
    if (months.length === 2) {
      weights[months[0]] = 0.6;
      weights[months[1]] = 0.4;
      return weights;
    }
    const first = months[0];
    const middle = months[Math.floor((months.length - 1) / 2)];
    const last = months[months.length - 1];
    weights[first] += 0.4;
    weights[middle] += 0.35;
    weights[last] += 0.25;
    return weights;
  }

  for (const month of months) {
    weights[month] = 1;
  }
  return weights;
}

/**
 * @param {number} total
 * @param {Record<string, number>} weights
 * @returns {Record<string, number>}
 */
function distributeByWeight(total, weights) {
  const entries = Object.entries(weights).sort(([a], [b]) => a.localeCompare(b));
  const weightTotal = entries.reduce((sum, [, value]) => sum + value, 0);

  if (weightTotal <= 0 || total <= 0) {
    return Object.fromEntries(entries.map(([month]) => [month, 0]));
  }

  /** @type {Record<string, number>} */
  const result = {};
  let running = 0;
  for (let i = 0; i < entries.length; i += 1) {
    const [month, weight] = entries[i];
    if (i === entries.length - 1) {
      result[month] = roundMoney(total - running);
      break;
    }
    const amount = roundMoney((total * weight) / weightTotal);
    result[month] = amount;
    running += amount;
  }

  return result;
}

/**
 * @param {{
 *   budgetPlanId: string,
 *   scenarioId: string,
 *   budgetLines: import('../contracts/types.js').BudgetLine[],
 *   electionCalendar?: import('../contracts/types.js').ElectionCalendar,
 *   reserveRate?: number,
 *   minimumStaticReserve?: number,
 *   currentCashOnHand?: number,
 *   notes?: string
 * }} input
 * @returns {import('../contracts/types.js').SpendTimelineSnapshot}
 */
export function buildSpendTimelineSnapshot(input) {
  /** @type {Record<string, number>} */
  const monthly = {};
  /** @type {Record<string, number>} */
  const phaseTotals = {};

  for (const line of input.budgetLines) {
    const months = monthsBetween(line.start_date, line.end_date);
    const weights = patternWeights(months, line.spend_pattern, line.custom_spend_weights);
    const allocated = distributeByWeight(line.planned_amount, weights);

    for (const [month, amount] of Object.entries(allocated)) {
      monthly[month] = roundMoney((monthly[month] ?? 0) + amount);
    }

    const phase = line.phase_label ?? "Unassigned";
    phaseTotals[phase] = roundMoney((phaseTotals[phase] ?? 0) + line.planned_amount);
  }

  const reserveRate = input.reserveRate ?? 0.2;
  const minStatic = input.minimumStaticReserve ?? 0;
  /** @type {Record<string, number>} */
  const reserveFloorByPeriod = {};
  /** @type {string[]} */
  const cashStressPeriods = [];

  for (const month of Object.keys(monthly).sort()) {
    const spend = monthly[month];
    const floor = roundMoney(Math.max(minStatic, reserveRate * spend));
    reserveFloorByPeriod[month] = floor;

    if (input.currentCashOnHand != null && spend + floor > input.currentCashOnHand) {
      cashStressPeriods.push(month);
    }
  }

  const primaryMonth = monthFromIso(input.electionCalendar?.primary_date);
  const generalMonth = monthFromIso(input.electionCalendar?.general_date);

  return {
    id: makeId("timeline"),
    budget_plan_id: input.budgetPlanId,
    scenario_id: input.scenarioId,
    generated_at: nowIso(),
    monthly_spend_schedule: monthly,
    phase_spend_schedule: phaseTotals,
    peak_month: peakMonth(monthly),
    total_before_primary: roundMoney(sumThroughMonth(monthly, primaryMonth)),
    total_before_general: roundMoney(sumThroughMonth(monthly, generalMonth)),
    reserve_floor_by_period: reserveFloorByPeriod,
    cash_stress_periods: cashStressPeriods,
    notes: input.notes
  };
}
