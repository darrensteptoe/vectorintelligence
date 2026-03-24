import { EMPTY_STATES } from "../../core/contracts/uiCopy.js";

export const fundingPathPage = {
  id: "funding-path",
  title: "Funding Path",
  render(state) {
    return {
      funding_requirement_snapshot: state.snapshots.fundingRequirement ?? null,
      reserve_status: state.snapshots.reserveStatus,
      field_funding_status: state.snapshots.fieldFundingStatus ?? null,
      empty_state:
        state.snapshots.fundingRequirement == null ? EMPTY_STATES.fundingPath : null,
      note: "All values shown here are canonical snapshot outputs."
    };
  }
};
