import {
  MANUAL_FRONT_PAGE,
  MANUAL_SECTIONS,
  MANUAL_USAGE_GUIDANCE
} from "../../core/contracts/manualLanguage.js";

export const manualPage = {
  id: "manual",
  title: "Manual",
  render() {
    return {
      header: MANUAL_FRONT_PAGE.title,
      opening: MANUAL_FRONT_PAGE.opening,
      context: MANUAL_FRONT_PAGE.context,
      usage_guidance: MANUAL_USAGE_GUIDANCE,
      sections: MANUAL_SECTIONS
    };
  }
};
