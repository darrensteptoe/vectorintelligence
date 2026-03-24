import { ACTIVITY_SURFACE, EMPTY_STATES, STATE_MATRIX } from "../../core/contracts/uiCopy.js";
import { ACTIVITY_WARNINGS, EMPTY_STATE_WARNINGS } from "../../core/contracts/warningLanguage.js";

/**
 * @param {number | null} rate
 */
function activityExecution(rate) {
  if (typeof rate !== "number") {
    return null;
  }

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

export const activityPage = {
  id: "activity",
  title: "Activity",
  render(state) {
    return {
      header: ACTIVITY_SURFACE.header,
      body: ACTIVITY_SURFACE.body,
      this_week_section: ACTIVITY_SURFACE.thisWeek,
      call_time_session_card: ACTIVITY_SURFACE.callTimeSessionCard,
      event_card: ACTIVITY_SURFACE.eventCard,
      finance_activities: state.financeActivities,
      activity_count: state.financeActivities.length,
      activity_completion_rate: state.snapshots.activityCompletionRate,
      execution_state: activityExecution(state.snapshots.activityCompletionRate),
      empty_state:
        state.financeActivities.length === 0
          ? {
              ...ACTIVITY_SURFACE.emptyState,
              warning: EMPTY_STATE_WARNINGS.noActivitiesThisWeek
            }
          : EMPTY_STATES.activity
    };
  }
};
