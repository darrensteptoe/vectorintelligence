import {
  CORE_PATH_STATUSES,
  FUNDING_RISK_LEVELS,
  FUNDING_STATUSES,
  RESERVE_STATUSES,
  isOneOf
} from "../contracts/enums.js";
import { makeId, nowIso, roundMoney } from "../contracts/types.js";
import { countWeeksInMonths, monthFromIso } from "./time.js";

/**
 * @param {{
 *   minimumStaticReserve?: number,
 *   reserveRate?: number,
 *   nextPeriodRequiredSpend: number
 * }} input
 */
export function computeReserveTarget(input) {
  const minimum = input.minimumStaticReserve ?? 0;
  const rate = input.reserveRate ?? 0.2;
  return roundMoney(Math.max(minimum, rate * input.nextPeriodRequiredSpend));
}

/**
 * @param {{reserveAvailable: number, reserveTarget: number}} input
 * @returns {string}
 */
export function evaluateReserveStatus(input) {
  if (input.reserveTarget <= 0) {
    return "Healthy";
  }

  const ratio = input.reserveAvailable / input.reserveTarget;
  if (ratio >= 1) {
    return "Healthy";
  }
  if (ratio >= 0.75) {
    return "Tight";
  }
  return "At Risk";
}

/**
 * @param {number} paceRatio
 * @returns {string}
 */
function paceStatusFromRatio(paceRatio) {
  if (!Number.isFinite(paceRatio)) {
    return "Watch";
  }
  if (paceRatio >= 0.95) {
    return "On Path";
  }
  if (paceRatio >= 0.8) {
    return "Watch";
  }
  return "Off Path";
}

/**
 * @param {number} fundedShare
 * @returns {string}
 */
function fundingStatusFromShare(fundedShare) {
  if (fundedShare >= 0.95) {
    return "On Path";
  }
  if (fundedShare >= 0.8) {
    return "Watch";
  }
  return "Off Path";
}

/**
 * @param {number} paceRatio
 * @returns {string}
 */
function fundingRiskLevelFromPaceRatio(paceRatio) {
  if (paceRatio >= 1) {
    return "Low";
  }
  if (paceRatio >= 0.9) {
    return "Moderate";
  }
  if (paceRatio >= 0.8) {
    return "Elevated";
  }
  if (paceRatio >= 0.65) {
    return "High";
  }
  return "Severe";
}

/**
 * @param {number} total
 * @param {Record<string, number>} monthlyWeights
 * @returns {Record<string, number>}
 */
function distributeTargets(total, monthlyWeights) {
  const months = Object.keys(monthlyWeights).sort();
  const totalWeight = months.reduce((sum, month) => sum + monthlyWeights[month], 0);

  if (total <= 0 || totalWeight <= 0 || months.length === 0) {
    return Object.fromEntries(months.map((month) => [month, 0]));
  }

  /** @type {Record<string, number>} */
  const result = {};
  let running = 0;
  for (let i = 0; i < months.length; i += 1) {
    const month = months[i];
    if (i === months.length - 1) {
      result[month] = roundMoney(total - running);
      break;
    }
    const amount = roundMoney((total * monthlyWeights[month]) / totalWeight);
    result[month] = amount;
    running += amount;
  }

  return result;
}

/**
 * @param {Record<string, number>} monthlyTargets
 * @returns {Record<string, number>}
 */
function weeklyTargets(monthlyTargets) {
  /** @type {Record<string, number>} */
  const weekly = {};
  for (const [month, value] of Object.entries(monthlyTargets)) {
    const weeks = countWeeksInMonths([month]);
    weekly[month] = roundMoney(value / weeks);
  }
  return weekly;
}

/**
 * @param {{
 *   monthlySpendSchedule: Record<string, number>,
 *   reserveFloorByPeriod: Record<string, number>,
 *   checkpointMonth: string | null,
 *   startingCash: number,
 *   likelyReceiptsBeforeCheckpoint: number
 * }} input
 * @returns {number}
 */
function requiredByCheckpoint(input) {
  if (!input.checkpointMonth) {
    return 0;
  }

  let spendThrough = 0;
  for (const [month, spend] of Object.entries(input.monthlySpendSchedule)) {
    if (month <= input.checkpointMonth) {
      spendThrough += spend;
    }
  }

  const reserveFloorAtCheckpoint = input.reserveFloorByPeriod[input.checkpointMonth] ?? 0;
  return roundMoney(
    Math.max(
      0,
      spendThrough + reserveFloorAtCheckpoint - input.startingCash - input.likelyReceiptsBeforeCheckpoint
    )
  );
}

/**
 * @param {{
 *   campaignId: string,
 *   scenarioId: string,
 *   budgetPlanId: string,
 *   spendTimelineSnapshotId: string,
 *   totalPlannedBudget: number,
 *   requiredBudget: number,
 *   reserveTarget: number,
 *   currentCashOnHand: number,
 *   currentDebt?: number,
 *   committedOrReceivedFundsExpected?: number,
 *   competitiveThreshold?: number,
 *   raisedToDate?: number,
 *   actualRaiseTotalToDate?: number,
 *   electionCalendar?: {primary_date?: string, general_date?: string},
 *   monthlySpendSchedule: Record<string, number>,
 *   reserveFloorByPeriod: Record<string, number>,
 *   notes?: string
 * }} input
 * @returns {import('../contracts/types.js').FundingRequirementSnapshot & { pace_status: string, funding_status: string }}
 */
export function computeFundingRequirementSnapshot(input) {
  const debt = input.currentDebt ?? 0;
  const committedOrReceived = input.committedOrReceivedFundsExpected ?? 0;
  const raisedToDate = input.raisedToDate ?? 0;
  const competitiveThreshold = input.competitiveThreshold ?? 0;

  const totalRaiseTarget = roundMoney(
    Math.max(0, input.totalPlannedBudget + input.reserveTarget + debt - input.currentCashOnHand)
  );

  const months = Object.keys(input.monthlySpendSchedule).sort();
  const monthlyWeights =
    months.length === 0
      ? { [new Date().toISOString().slice(0, 7)]: 1 }
      : input.monthlySpendSchedule;

  const remainingRaiseTarget = roundMoney(Math.max(0, totalRaiseTarget - raisedToDate));
  const raiseByMonth = distributeTargets(remainingRaiseTarget, monthlyWeights);
  const raiseByWeek = weeklyTargets(raiseByMonth);

  const nowMonth = new Date().toISOString().slice(0, 7);
  const requiredToDate = roundMoney(
    Object.entries(raiseByMonth)
      .filter(([month]) => month <= nowMonth)
      .reduce((sum, [, amount]) => sum + amount, 0)
  );
  const actualToDate = input.actualRaiseTotalToDate ?? raisedToDate;
  const paceRatio = requiredToDate === 0 ? Number.NaN : actualToDate / requiredToDate;

  const primaryMonth = monthFromIso(input.electionCalendar?.primary_date);
  const generalMonth = monthFromIso(input.electionCalendar?.general_date);

  /** @type {Record<string, number>} */
  const checkpoints = {
    before_primary: requiredByCheckpoint({
      monthlySpendSchedule: input.monthlySpendSchedule,
      reserveFloorByPeriod: input.reserveFloorByPeriod,
      checkpointMonth: primaryMonth,
      startingCash: input.currentCashOnHand,
      likelyReceiptsBeforeCheckpoint: committedOrReceived
    }),
    before_general: requiredByCheckpoint({
      monthlySpendSchedule: input.monthlySpendSchedule,
      reserveFloorByPeriod: input.reserveFloorByPeriod,
      checkpointMonth: generalMonth,
      startingCash: input.currentCashOnHand,
      likelyReceiptsBeforeCheckpoint: committedOrReceived
    })
  };

  const gapToSafeFunding = roundMoney(
    Math.max(
      0,
      input.requiredBudget + input.reserveTarget - input.currentCashOnHand - committedOrReceived
    )
  );

  const gapToCompetitiveFunding = roundMoney(
    Math.max(0, competitiveThreshold - input.currentCashOnHand - raisedToDate)
  );

  const paceStatus = paceStatusFromRatio(paceRatio);
  const fundingRiskLevel = fundingRiskLevelFromPaceRatio(Number.isFinite(paceRatio) ? paceRatio : 0.6);
  const fundedShare =
    input.requiredBudget + input.reserveTarget <= 0
      ? 1
      : (input.currentCashOnHand + committedOrReceived) / (input.requiredBudget + input.reserveTarget);
  const fundingStatus = fundingStatusFromShare(fundedShare);

  if (!isOneOf(paceStatus, CORE_PATH_STATUSES)) {
    throw new Error(`Invalid pace status generated: ${paceStatus}`);
  }
  if (!isOneOf(fundingStatus, FUNDING_STATUSES)) {
    throw new Error(`Invalid funding status generated: ${fundingStatus}`);
  }
  if (!isOneOf(fundingRiskLevel, FUNDING_RISK_LEVELS)) {
    throw new Error(`Invalid funding risk level generated: ${fundingRiskLevel}`);
  }

  return {
    id: makeId("funding"),
    campaign_id: input.campaignId,
    scenario_id: input.scenarioId,
    budget_plan_id: input.budgetPlanId,
    spend_timeline_snapshot_id: input.spendTimelineSnapshotId,
    generated_at: nowIso(),
    total_raise_target: totalRaiseTarget,
    raise_target_by_month: raiseByMonth,
    raise_target_by_week: raiseByWeek,
    raise_target_by_checkpoint: checkpoints,
    reserve_floor: input.reserveTarget,
    gap_to_safe_funding: gapToSafeFunding,
    gap_to_competitive_funding: gapToCompetitiveFunding,
    path_status: paceStatus,
    pace_status: paceStatus,
    funding_status: fundingStatus,
    funding_risk_level: fundingRiskLevel,
    notes: input.notes
  };
}

/**
 * @param {string} reserveStatus
 * @param {number} fundedPercentOfFieldPlan
 * @returns {string}
 */
export function deriveFieldFundingStatus(reserveStatus, fundedPercentOfFieldPlan) {
  if (!isOneOf(reserveStatus, RESERVE_STATUSES)) {
    throw new Error(`Invalid reserve status: ${reserveStatus}`);
  }

  if (reserveStatus === "At Risk" || fundedPercentOfFieldPlan < 0.75) {
    return "Redline";
  }

  if (reserveStatus === "Tight" || fundedPercentOfFieldPlan < 0.9) {
    return "Caution";
  }

  return "Greenlight";
}
