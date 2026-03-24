import {
  FUNDING_PATH_SURFACE,
  TOOLTIP_LIBRARY
} from "../../core/contracts/uiCopy.js";
import { FUNDING_PATH_WARNINGS } from "../../core/contracts/warningLanguage.js";

/**
 * @param {import('../../state/store.js').CfeState} state
 */
function buildPathWarnings(state) {
  /** @type {Array<{title: string, body: string}>} */
  const warnings = [];
  const funding = state.snapshots.fundingRequirement;
  if (!funding) {
    return warnings;
  }

  const paceStatus = funding.pace_status ?? funding.path_status;
  if (paceStatus === "Slightly Behind" || paceStatus === "Materially Behind") {
    warnings.push(FUNDING_PATH_WARNINGS.paceBehind);
  }

  const beforePrimary = funding.raise_target_by_checkpoint?.before_primary ?? 0;
  if (funding.total_raise_target > 0 && beforePrimary / funding.total_raise_target >= 0.65) {
    warnings.push(FUNDING_PATH_WARNINGS.unrealisticCheckpoint);
  }

  /** @type {Record<string, number>} */
  const activityByChannel = {};
  for (const activity of state.financeActivities) {
    if (typeof activity.channel === "string" && activity.channel.length > 0) {
      activityByChannel[activity.channel] = (activityByChannel[activity.channel] ?? 0) + 1;
    }
  }

  const channelCounts = Object.values(activityByChannel);
  const totalChannelActivity = channelCounts.reduce((sum, count) => sum + count, 0);
  const dominantShare =
    totalChannelActivity === 0 ? 0 : Math.max(...channelCounts, 0) / totalChannelActivity;

  if (dominantShare > 0.7) {
    warnings.push(FUNDING_PATH_WARNINGS.channelConcentration);
  }

  return warnings;
}

/**
 * @param {string | undefined} fundingStatus
 */
function successStateFromFundingStatus(fundingStatus) {
  const map = {
    "Fully Fundable": FUNDING_PATH_SURFACE.successStates[0],
    "Mostly Fundable": FUNDING_PATH_SURFACE.successStates[1],
    "Partially Fundable": FUNDING_PATH_SURFACE.successStates[2],
    "Not Yet Fundable": FUNDING_PATH_SURFACE.successStates[3],
    Redline: FUNDING_PATH_SURFACE.successStates[3]
  };

  return map[fundingStatus ?? ""] ?? FUNDING_PATH_SURFACE.successStates[2];
}

export const fundingPathPage = {
  id: "funding-path",
  title: "Funding Path",
  render(state) {
    const funding = state.snapshots.fundingRequirement;

    return {
      header: FUNDING_PATH_SURFACE.header,
      subheader: FUNDING_PATH_SURFACE.subheader,
      intro: FUNDING_PATH_SURFACE.intro,
      interpretation: FUNDING_PATH_SURFACE.interpretation,
      core_card_descriptions: FUNDING_PATH_SURFACE.coreCardDescriptions,
      funding_requirement_snapshot: funding ?? null,
      status_block:
        funding == null
          ? null
          : {
              funding_status: funding.funding_status,
              pace_status: funding.pace_status ?? funding.path_status,
              reserve_status: state.snapshots.reserveStatus,
              field_funding_status: state.snapshots.fieldFundingStatus,
              funding_risk_level: funding.funding_risk_level,
              narrative: successStateFromFundingStatus(funding.funding_status)
            },
      warnings: buildPathWarnings(state),
      risk_flags: state.snapshots.riskFlags,
      tooltips: {
        checkpoint_target: TOOLTIP_LIBRARY.checkpointTarget,
        reserve_floor: TOOLTIP_LIBRARY.reserveFloor,
        modeled_value: TOOLTIP_LIBRARY.modeledValue
      },
      empty_state:
        funding == null
          ? {
              header: "No funding path has been generated yet",
              body:
                "Create a budget plan and recompute canonical snapshots to generate target totals, pacing, and checkpoint requirements.",
              cta: "Generate Funding Path"
            }
          : null,
      note: "Funding path cards consume canonical funding snapshots; UI does not recompute engine values."
    };
  }
};
