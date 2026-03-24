import {
  DONOR_INTELLIGENCE_SURFACE,
  EMPTY_STATES,
  STATE_MATRIX,
  TOOLTIP_LIBRARY
} from "../../core/contracts/uiCopy.js";
import { DONOR_INTELLIGENCE_WARNINGS } from "../../core/contracts/warningLanguage.js";

/**
 * @param {Record<string, unknown>} summary
 */
function donorState(summary) {
  const inDistrictShare =
    typeof summary.in_district_share === "number" ? summary.in_district_share : null;
  const concentrationIndex =
    typeof summary.concentration_index === "number" ? summary.concentration_index : null;

  if (inDistrictShare != null && inDistrictShare < 0.35) {
    return STATE_MATRIX.donorIntelligence.weakInDistrictBase;
  }
  if (concentrationIndex != null && concentrationIndex > 0.55) {
    return STATE_MATRIX.donorIntelligence.narrowBase;
  }
  return STATE_MATRIX.donorIntelligence.broadBase;
}

export const donorsPage = {
  id: "donor-intelligence",
  title: "Donor Intelligence",
  render(state) {
    const donorSummary = state.donorGeoSummary ?? null;

    return {
      header: DONOR_INTELLIGENCE_SURFACE.header,
      body: DONOR_INTELLIGENCE_SURFACE.body,
      geography_panel: DONOR_INTELLIGENCE_SURFACE.geographyPanel,
      occupation_panel: DONOR_INTELLIGENCE_SURFACE.occupationPanel,
      concentration_panel: DONOR_INTELLIGENCE_SURFACE.concentrationPanel,
      donor_summary: donorSummary,
      state_banner: donorSummary ? donorState(donorSummary) : null,
      warnings: donorSummary ? [] : [DONOR_INTELLIGENCE_WARNINGS.classificationLimits],
      tooltips: {
        standardized_value: TOOLTIP_LIBRARY.standardizedValue,
        manual_override: TOOLTIP_LIBRARY.manualOverride
      },
      empty_state: donorSummary == null ? DONOR_INTELLIGENCE_SURFACE.emptyState : EMPTY_STATES.donors
    };
  }
};
