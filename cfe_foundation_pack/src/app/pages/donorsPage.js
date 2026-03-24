import { EMPTY_STATES } from "../../core/contracts/uiCopy.js";

export const donorsPage = {
  id: "donors",
  title: "Donors",
  render(state) {
    const donorSummary = state.donorGeoSummary ?? null;
    return {
      donor_summary: donorSummary,
      empty_state: donorSummary == null ? EMPTY_STATES.donors : null
    };
  }
};
