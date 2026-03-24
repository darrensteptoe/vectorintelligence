export const fundingPage = {
  id: "funding",
  title: "Funding Path",
  render(state) {
    return {
      funding_requirement_snapshot: state.snapshots.fundingRequirement ?? null,
      reserve_status: state.snapshots.reserveStatus,
      field_funding_status: state.snapshots.fieldFundingStatus ?? null,
      risk_flags: state.snapshots.riskFlags,
      note: "All values shown here are canonical snapshot outputs."
    };
  }
};
