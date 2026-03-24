import { FINANCE_ACTIVITY_SURFACE } from "../../core/contracts/uiCopy.js";
import { ACTIVITY_WARNINGS, EMPTY_STATE_WARNINGS } from "../../core/contracts/warningLanguage.js";

/**
 * @param {number | null} rate
 */
function activityPerformance(rate) {
  if (typeof rate !== "number") {
    return null;
  }
  if (rate >= 0.8) {
    return {
      status: "Strong",
      narrative: FINANCE_ACTIVITY_SURFACE.performanceCopy.strong
    };
  }
  if (rate >= 0.6) {
    return {
      status: "Mixed",
      narrative: FINANCE_ACTIVITY_SURFACE.performanceCopy.mixed
    };
  }
  return {
    status: "Weak",
    narrative: FINANCE_ACTIVITY_SURFACE.performanceCopy.weak,
    warning: ACTIVITY_WARNINGS.weakCompletion
  };
}

export const activityPage = {
  id: "finance-activity",
  title: "Finance Activity",
  render(state) {
    return {
      header: FINANCE_ACTIVITY_SURFACE.header,
      subheader: FINANCE_ACTIVITY_SURFACE.subheader,
      intro: FINANCE_ACTIVITY_SURFACE.intro,
      activity_type_helper_text: FINANCE_ACTIVITY_SURFACE.activityTypeHelperText,
      finance_activities: state.financeActivities,
      activity_count: state.financeActivities.length,
      activity_completion_rate: state.snapshots.activityCompletionRate,
      performance: activityPerformance(state.snapshots.activityCompletionRate),
      empty_state:
        state.financeActivities.length === 0
          ? {
              ...FINANCE_ACTIVITY_SURFACE.emptyState,
              warning: EMPTY_STATE_WARNINGS.noActivitiesThisWeek
            }
          : null,
      note: "Execution metrics are provided as canonical snapshots from the store."
    };
  }
};
