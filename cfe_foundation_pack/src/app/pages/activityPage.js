import { EMPTY_STATES } from "../../core/contracts/uiCopy.js";

export const activityPage = {
  id: "activity",
  title: "Activity",
  render(state) {
    return {
      activity_count: state.financeActivities.length,
      activities: state.financeActivities,
      empty_state: state.financeActivities.length === 0 ? EMPTY_STATES.activity : null
    };
  }
};
