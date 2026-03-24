import { ACTIVITY_SURFACE, STATE_MATRIX } from "../../core/contracts/uiCopy.js";
import { ACTIVITY_WARNINGS, EMPTY_STATE_WARNINGS } from "../../core/contracts/warningLanguage.js";

/**
 * @param {number | null} rate
 */
function activityExecution(rate) {
  if (typeof rate === "number") {
    if (rate >= 0.8) {
      return {
        status: "Strong",
        narrative: ACTIVITY_SURFACE.performanceCopy.strong,
        state_banner: STATE_MATRIX.activity.strongExecution
      };
    }

    if (rate >= 0.6) {
      return {
        status: "Mixed",
        narrative: ACTIVITY_SURFACE.performanceCopy.mixed,
        state_banner: STATE_MATRIX.activity.mixedExecution
      };
    }

    return {
      status: "Weak",
      narrative: ACTIVITY_SURFACE.performanceCopy.weak,
      warning: ACTIVITY_WARNINGS.weakCompletion,
      state_banner: STATE_MATRIX.activity.weakExecution
    };
  }

  return null;
}

/**
 * @param {import('../../core/contracts/types.js').FinanceActivity[]} activities
 */
function summarizePlanVsActual(activities) {
  const total = activities.length;
  const completed = activities.filter((item) => item.status === "Completed").length;
  const inProgress = activities.filter((item) => item.status === "In Progress").length;
  const deferred = activities.filter((item) => item.status === "Deferred").length;

  return {
    total_planned: total,
    completed,
    in_progress: inProgress,
    deferred,
    completion_rate: total === 0 ? null : completed / total
  };
}

export const activityPage = {
  id: "finance-operations",
  title: "Finance Operations",
  render(state) {
    const planVsActual = summarizePlanVsActual(state.financeActivities);

    return {
      header: "Finance Operations",
      body: ACTIVITY_SURFACE.body,
      module_intro:
        "Manage call time, meetings, events, and follow-up as an operating workflow tied to funding outcomes.",
      this_week_section: ACTIVITY_SURFACE.thisWeek,
      call_time_session_card: ACTIVITY_SURFACE.callTimeSessionCard,
      event_card: ACTIVITY_SURFACE.eventCard,
      finance_activities: state.financeActivities,
      planned_vs_actual: planVsActual,
      activity_completion_rate: state.snapshots.activityCompletionRate,
      execution_state: activityExecution(state.snapshots.activityCompletionRate),
      empty_state:
        state.financeActivities.length === 0
          ? {
              ...ACTIVITY_SURFACE.emptyState,
              warning: EMPTY_STATE_WARNINGS.noActivitiesThisWeek
            }
          : null
    };
  }
};
