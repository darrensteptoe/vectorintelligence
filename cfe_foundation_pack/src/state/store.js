import { exportCfeFundingStatusSnapshot, importFpeBudgetDemandSnapshot } from "../core/bridge/io.js";
import { exportCampaignSnapshot, importCampaignSnapshot } from "../core/bridge/campaignSnapshot.js";
import { computeBudgetSummary } from "../core/engine/budget.js";
import {
  computeFundingRequirementSnapshot,
  computeReserveTarget,
  evaluateReserveStatus
} from "../core/engine/funding.js";
import {
  composeCandidateBrief,
  composeFinanceCommitteeMemo,
  composeLeadershipMemo,
  composeWeeklyFinanceMemo
} from "../core/engine/reporting.js";
import { buildCoreRiskFlags } from "../core/engine/risk.js";
import { buildSpendTimelineSnapshot } from "../core/engine/timeline.js";

/**
 * @typedef {{
 *   route: string,
 *   scenarioId: string,
 *   raceProfile: import('../core/contracts/types.js').RaceProfile | null,
 *   campaignProfile: import('../core/contracts/types.js').CampaignProfile | null,
 *   filingCalendar: import('../core/contracts/types.js').FilingCalendar | null,
 *   electionCalendar: import('../core/contracts/types.js').ElectionCalendar | null,
 *   budgetPlan: import('../core/contracts/types.js').BudgetPlan | null,
 *   budgetLines: import('../core/contracts/types.js').BudgetLine[],
 *   financeActivities: import('../core/contracts/types.js').FinanceActivity[],
 *   benchmarkSet: Record<string, unknown> | null,
 *   channelTargetPlan: Record<string, unknown> | null,
 *   donorGeoSummary: Record<string, unknown> | null,
 *   spendMixSummary: Record<string, unknown> | null,
 *   bridge: {
 *     fpeSnapshot: import('../core/contracts/types.js').FPEBudgetDemandSnapshot | null,
 *     cfeSnapshot: import('../core/contracts/types.js').CFEFundingStatusSnapshot | null
 *   },
 *   snapshots: {
 *     budgetSummary: Record<string, unknown> | null,
 *     spendTimeline: import('../core/contracts/types.js').SpendTimelineSnapshot | null,
 *     fundingRequirement: import('../core/contracts/types.js').FundingRequirementSnapshot | null,
 *     reserveStatus: string,
 *     fieldFundingStatus: string | null,
 *     activityCompletionRate: number | null,
 *     riskFlags: import('../core/contracts/types.js').RiskFlag[],
 *     reports: {
 *       weeklyFinanceMemo: Record<string, unknown> | null,
 *       candidateBrief: Record<string, unknown> | null,
 *       financeCommitteeMemo: Record<string, unknown> | null,
 *       leadershipMemo: Record<string, unknown> | null
 *     }
 *   }
 * }} CfeState
 */

/**
 * @typedef {{
 *   getState: () => CfeState,
 *   subscribe: (listener: (state: CfeState) => void) => () => void,
 *   setRoute: (route: string) => void,
 *   setCampaignSetup: (setup: Partial<CfeState>) => void,
 *   setBudgetPlan: (plan: import('../core/contracts/types.js').BudgetPlan) => void,
 *   upsertBudgetLine: (line: import('../core/contracts/types.js').BudgetLine) => void,
 *   setFinanceActivities: (activities: import('../core/contracts/types.js').FinanceActivity[]) => void,
 *   setBenchmarkSet: (benchmark: Record<string, unknown> | null) => void,
 *   importFpeSnapshot: (raw: string | Record<string, unknown>) => void,
 *   recomputeCanonicalSnapshots: (options?: {raisedToDate?: number, actualRaiseToDate?: number, weekEndingDate?: string}) => void,
 *   exportCampaignSnapshot: () => Record<string, unknown>,
 *   importCampaignSnapshot: (raw: string | Record<string, unknown>) => Record<string, unknown>
 * }} CfeStore
 */

/**
 * @param {import('../core/contracts/types.js').FinanceActivity[]} activities
 * @returns {number}
 */
function estimateRaisedToDate(activities) {
  return activities.reduce((sum, activity) => {
    if (typeof activity.goal_amount === "number") {
      return sum + activity.goal_amount;
    }
    return sum;
  }, 0);
}

/**
 * @param {import('../core/contracts/types.js').FinanceActivity[]} activities
 * @returns {number | null}
 */
function estimateActivityCompletionRate(activities) {
  if (activities.length === 0) {
    return null;
  }

  let completedWeight = 0;
  for (const activity of activities) {
    if (activity.status === "Completed" || activity.status === "Closed") {
      completedWeight += 1;
      continue;
    }
    if (activity.status === "Partially Completed") {
      completedWeight += 0.5;
    }
  }

  return completedWeight / activities.length;
}

/**
 * @returns {CfeState}
 */
function makeInitialState() {
  return {
    route: "/overview",
    scenarioId: "active",
    raceProfile: null,
    campaignProfile: null,
    filingCalendar: null,
    electionCalendar: null,
    budgetPlan: null,
    budgetLines: [],
    financeActivities: [],
    benchmarkSet: null,
    channelTargetPlan: null,
    donorGeoSummary: null,
    spendMixSummary: null,
    bridge: {
      fpeSnapshot: null,
      cfeSnapshot: null
    },
    snapshots: {
      budgetSummary: null,
      spendTimeline: null,
      fundingRequirement: null,
      reserveStatus: "Healthy",
      fieldFundingStatus: null,
      activityCompletionRate: null,
      riskFlags: [],
      reports: {
        weeklyFinanceMemo: null,
        candidateBrief: null,
        financeCommitteeMemo: null,
        leadershipMemo: null
      }
    }
  };
}

/**
 * @param {Partial<CfeState>} [seed]
 * @returns {CfeStore}
 */
export function createCfeStore(seed = {}) {
  /** @type {CfeState} */
  let state = {
    ...makeInitialState(),
    ...seed,
    bridge: {
      ...makeInitialState().bridge,
      ...(seed.bridge ?? {})
    },
    snapshots: {
      ...makeInitialState().snapshots,
      ...(seed.snapshots ?? {}),
      reports: {
        ...makeInitialState().snapshots.reports,
        ...(seed.snapshots?.reports ?? {})
      }
    }
  };

  /** @type {Set<(state: CfeState) => void>} */
  const listeners = new Set();

  function notify() {
    for (const listener of listeners) {
      listener(state);
    }
  }

  function setState(updater) {
    state = updater(state);
    notify();
  }

  return {
    getState() {
      return state;
    },

    subscribe(listener) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },

    setRoute(route) {
      setState((current) => ({ ...current, route }));
    },

    setCampaignSetup(setup) {
      setState((current) => ({
        ...current,
        ...setup,
        bridge: {
          ...current.bridge,
          ...(setup.bridge ?? {})
        },
        snapshots: {
          ...current.snapshots,
          ...(setup.snapshots ?? {}),
          reports: {
            ...current.snapshots.reports,
            ...(setup.snapshots?.reports ?? {})
          }
        }
      }));
    },

    setBudgetPlan(plan) {
      setState((current) => ({
        ...current,
        budgetPlan: plan
      }));
    },

    upsertBudgetLine(line) {
      setState((current) => {
        const index = current.budgetLines.findIndex((item) => item.id === line.id);
        if (index === -1) {
          return {
            ...current,
            budgetLines: [...current.budgetLines, line]
          };
        }

        const next = [...current.budgetLines];
        next[index] = line;
        return {
          ...current,
          budgetLines: next
        };
      });
    },

    setFinanceActivities(activities) {
      setState((current) => ({
        ...current,
        financeActivities: activities
      }));
    },

    setBenchmarkSet(benchmark) {
      setState((current) => ({
        ...current,
        benchmarkSet: benchmark
      }));
    },

    importFpeSnapshot(raw) {
      const snapshot = importFpeBudgetDemandSnapshot(raw);
      setState((current) => ({
        ...current,
        bridge: {
          ...current.bridge,
          fpeSnapshot: snapshot
        }
      }));
    },

    recomputeCanonicalSnapshots(options = {}) {
      if (state.campaignProfile === null || state.budgetPlan === null || state.budgetLines.length === 0) {
        return;
      }

      const budgetSummary = computeBudgetSummary(state.budgetLines);

      const timeline = buildSpendTimelineSnapshot({
        budgetPlanId: state.budgetPlan.id,
        scenarioId: state.scenarioId,
        budgetLines: state.budgetLines,
        electionCalendar: state.electionCalendar ?? undefined,
        currentCashOnHand: state.campaignProfile.current_cash_on_hand,
        minimumStaticReserve: state.budgetPlan.reserve_target
      });

      const peakMonth = timeline.peak_month;
      const nextPeriodSpend = peakMonth ? timeline.monthly_spend_schedule[peakMonth] ?? 0 : 0;
      const reserveTarget =
        state.budgetPlan.reserve_target > 0
          ? state.budgetPlan.reserve_target
          : computeReserveTarget({
              nextPeriodRequiredSpend: nextPeriodSpend,
              minimumStaticReserve: 0,
              reserveRate: 0.2
            });

      const raisedToDate = options.raisedToDate ?? estimateRaisedToDate(state.financeActivities);
      const actualRaiseToDate = options.actualRaiseToDate ?? raisedToDate;
      const competitiveThreshold =
        typeof state.benchmarkSet?.competitive_threshold === "number"
          ? state.benchmarkSet.competitive_threshold
          : budgetSummary.total_planned_budget;

      const fundingRequirement = computeFundingRequirementSnapshot({
        campaignId: state.campaignProfile.id,
        scenarioId: state.scenarioId,
        budgetPlanId: state.budgetPlan.id,
        spendTimelineSnapshotId: timeline.id,
        totalPlannedBudget: budgetSummary.total_planned_budget,
        requiredBudget: budgetSummary.required_budget,
        reserveTarget,
        currentCashOnHand: state.campaignProfile.current_cash_on_hand,
        currentDebt: state.campaignProfile.current_debt,
        committedOrReceivedFundsExpected: raisedToDate,
        competitiveThreshold,
        raisedToDate,
        actualRaiseTotalToDate: actualRaiseToDate,
        electionCalendar: state.electionCalendar ?? undefined,
        monthlySpendSchedule: timeline.monthly_spend_schedule,
        reserveFloorByPeriod: timeline.reserve_floor_by_period
      });

      const reserveStatus = evaluateReserveStatus({
        reserveAvailable: state.campaignProfile.current_cash_on_hand,
        reserveTarget
      });

      let cfeBridgeSnapshot = state.bridge.cfeSnapshot;
      let fieldFundingStatus = null;
      if (state.bridge.fpeSnapshot) {
        cfeBridgeSnapshot = exportCfeFundingStatusSnapshot({
          campaignId: state.campaignProfile.id,
          officeId: state.bridge.fpeSnapshot.office_id,
          scenarioId: state.scenarioId,
          selectedFieldPlanCost: state.bridge.fpeSnapshot.total_projected_field_cost,
          availableFieldFunding: state.campaignProfile.current_cash_on_hand + raisedToDate,
          reserveStatus,
          fundingRiskLevel: fundingRequirement.funding_risk_level,
          notes: "Derived from canonical funding requirement snapshot."
        });
        fieldFundingStatus = cfeBridgeSnapshot.hiring_greenlight_status;
      }

      const activityCompletionRate = estimateActivityCompletionRate(state.financeActivities);

      const riskFlags = buildCoreRiskFlags({
        campaignId: state.campaignProfile.id,
        scenarioId: state.scenarioId,
        fundingRequirement,
        reserveStatus,
        fieldFundingStatus,
        fundedPercentOfFieldPlan: cfeBridgeSnapshot?.funded_percent_of_field_plan,
        activityCompletionRate: activityCompletionRate ?? undefined
      });

      const recommendations =
        riskFlags.length > 0
          ? riskFlags.slice(0, 3).map((flag) => flag.recommended_action)
          : [
              "Increase candidate call time volume over the next two weeks.",
              "Prioritize unresolved commitments already in the pipeline.",
              "Delay optional spending until reserve pressure improves."
            ];

      const weeklyFinanceMemo = composeWeeklyFinanceMemo({
        campaignName: state.campaignProfile.committee_name,
        weekEndingDate: options.weekEndingDate ?? new Date().toISOString().slice(0, 10),
        fundingRequirement,
        reserveStatus,
        fieldFundingStatus: fieldFundingStatus ?? undefined,
        raisedThisPeriod: raisedToDate,
        plannedRaiseThisPeriod:
          fundingRequirement.raise_target_by_checkpoint.before_primary || fundingRequirement.total_raise_target,
        recommendations
      });

      const candidateBrief = composeCandidateBrief({
        weeklyRaiseGoal:
          Object.values(fundingRequirement.raise_target_by_week).reduce((sum, value) => sum + value, 0) ||
          fundingRequirement.total_raise_target / 4,
        topAsks: state.financeActivities.slice(0, 3).map((activity) => activity.title),
        followUp: "Resolve soft commitments and move delayed pledges into scheduled receipt windows.",
        eventPriorities: [
          "Prioritize host-confirmed events with strong RSVP pipelines.",
          "Pair event asks with same-week follow-up blocks."
        ],
        oneRisk:
          riskFlags[0]?.title ?? "Reserve coverage should be watched as spending pressure increases.",
        fundingStatus: fundingRequirement.path_status
      });

      const financeCommitteeMemo = composeFinanceCommitteeMemo({
        committeeTarget: fundingRequirement.total_raise_target,
        topProspects: state.financeActivities
          .filter((activity) => activity.activity_type === "Donor Meeting")
          .slice(0, 5)
          .map((activity) => activity.title),
        unresolvedCommitments: [
          "Move unresolved major donor soft commits into dated follow-up tasks.",
          "Escalate delayed pledges older than 14 days to owner review."
        ],
        eventSupportStatus: "Event pipeline is active but should be validated against net-yield assumptions.",
        accountabilityNotes: [
          "Track owner-level completion for each assigned ask block.",
          "Confirm next-week ask list 48 hours before call-time blocks."
        ]
      });

      const leadershipMemo = composeLeadershipMemo({
        status: fundingRequirement.path_status,
        safeCommitments: ["Required payroll", "Compliance", "Critical field base operations"],
        unsafeCommitments: ["Optional expansion hires", "Nonessential consultant adds"],
        fieldAffordabilityNote:
          fieldFundingStatus == null
            ? "No field bridge snapshot loaded this period."
            : `Bridge indicates field status: ${fieldFundingStatus}.`,
        spendingPressureNote:
          timeline.peak_month == null
            ? "No spend peak identified yet."
            : `Peak spend month is ${timeline.peak_month}, reserve planning should be paced to that window.`,
        decisionPoints: [
          "Approve optional lines only when reserve status is Healthy or Tight.",
          "Hold expansion decisions until next checkpoint target is met."
        ]
      });

      setState((current) => ({
        ...current,
        bridge: {
          ...current.bridge,
          cfeSnapshot: cfeBridgeSnapshot
        },
        snapshots: {
          ...current.snapshots,
          budgetSummary,
          spendTimeline: timeline,
          fundingRequirement,
          reserveStatus,
          fieldFundingStatus,
          activityCompletionRate,
          riskFlags,
          reports: {
            weeklyFinanceMemo,
            candidateBrief,
            financeCommitteeMemo,
            leadershipMemo
          }
        }
      }));
    },

    exportCampaignSnapshot() {
      return exportCampaignSnapshot(state);
    },

    importCampaignSnapshot(raw) {
      return importCampaignSnapshot(raw);
    }
  };
}
