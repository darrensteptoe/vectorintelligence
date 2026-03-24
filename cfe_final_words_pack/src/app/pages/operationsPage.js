export const operationsPage = {
  id: "operations",
  title: "Finance Operations",
  render(state) {
    return {
      activity_count: state.financeActivities.length,
      activities: state.financeActivities,
      note: "Operations are tracked here; canonical funding/path math remains in core engines."
    };
  }
};
