import { MANUAL_SURFACE } from "../../core/contracts/uiCopy.js";
import {
  HEALTHY_RANGE_GUIDANCE,
  MANUAL_FRONT_PAGE,
  MANUAL_SECTIONS,
  MANUAL_USAGE_GUIDANCE,
  OPERATOR_MISTAKES
} from "../../core/contracts/manualLanguage.js";

export const manualPage = {
  id: "manual",
  title: "Manual",
  render() {
    return {
      header: MANUAL_SURFACE.header,
      body: MANUAL_SURFACE.body,
      front_page: MANUAL_FRONT_PAGE,
      usage_guidance: MANUAL_USAGE_GUIDANCE,
      section_intros: MANUAL_SURFACE.sectionIntros,
      sections: MANUAL_SECTIONS,
      healthy_range_guidance: HEALTHY_RANGE_GUIDANCE,
      common_operator_mistakes: OPERATOR_MISTAKES
    };
  }
};
