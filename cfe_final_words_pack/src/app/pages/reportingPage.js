export const reportingPage = {
  id: "reporting",
  title: "Reporting",
  render(state) {
    return {
      weekly_finance_memo: state.snapshots.reports.weeklyFinanceMemo ?? null,
      candidate_brief: state.snapshots.reports.candidateBrief ?? null,
      committee_memo: state.snapshots.reports.financeCommitteeMemo ?? null,
      leadership_memo: state.snapshots.reports.leadershipMemo ?? null,
      note: "Reports are composed from canonical snapshots without recalculating engine values."
    };
  }
};
