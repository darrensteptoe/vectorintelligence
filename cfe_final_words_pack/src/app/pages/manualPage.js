import { MANUAL_SURFACE } from "../../core/contracts/uiCopy.js";
import {
  ECOSYSTEM_ALIGNMENT_RULES,
  HEALTHY_RANGE_GUIDANCE,
  MANUAL_FRONT_PAGE,
  MANUAL_SECTIONS,
  MANUAL_TONE_RULES,
  MANUAL_USAGE_GUIDANCE,
  OPERATOR_MISTAKES,
  PAGE_MANUAL_GUIDANCE
} from "../../core/contracts/manualLanguage.js";

export const manualPage = {
  id: "manual",
  title: "Manual",
  render() {
    return {
      header: MANUAL_SURFACE.header,
      body: MANUAL_SURFACE.body,
      front_page: MANUAL_FRONT_PAGE,
      tone_rules: MANUAL_TONE_RULES,
      ecosystem_alignment_rules: ECOSYSTEM_ALIGNMENT_RULES,
      usage_guidance: MANUAL_USAGE_GUIDANCE,
      section_intros: MANUAL_SURFACE.sectionIntros,
      sections: MANUAL_SECTIONS,
      page_manual_guidance: PAGE_MANUAL_GUIDANCE,
      healthy_range_guidance: HEALTHY_RANGE_GUIDANCE,
      common_operator_mistakes: OPERATOR_MISTAKES
    };
  }
};
