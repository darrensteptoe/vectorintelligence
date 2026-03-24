import {
  DONOR_INTELLIGENCE_SURFACE,
  GLOBAL_EMPTY_STATES,
  TOOLTIP_LIBRARY
} from "../../core/contracts/uiCopy.js";
import { DONOR_INTELLIGENCE_WARNINGS } from "../../core/contracts/warningLanguage.js";

export const donorsPage = {
  id: "donor-intelligence",
  title: "Donor Intelligence",
  render(state) {
    const donorSummary = state.donorGeoSummary ?? null;
    const hasSummary = donorSummary != null;

    return {
      header: DONOR_INTELLIGENCE_SURFACE.header,
      subheader: DONOR_INTELLIGENCE_SURFACE.subheader,
      intro: DONOR_INTELLIGENCE_SURFACE.intro,
      geography_interpretation: DONOR_INTELLIGENCE_SURFACE.geographyInterpretation,
      occupation_interpretation: DONOR_INTELLIGENCE_SURFACE.occupationInterpretation,
      donor_summary: donorSummary,
      warnings: hasSummary ? [] : [DONOR_INTELLIGENCE_WARNINGS.classificationLimits],
      tooltips: {
        standardized_value: TOOLTIP_LIBRARY.standardizedValue,
        manual_override: TOOLTIP_LIBRARY.manualOverride
      },
      empty_state: hasSummary ? null : GLOBAL_EMPTY_STATES.noDonorIntelligence
    };
  }
};
