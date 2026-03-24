import {
  EMPTY_STATES,
  FUNDING_PATH_SURFACE,
  STATE_MATRIX,
  STATUS_CHIP_HELPER_COPY,
  TOOLTIP_LIBRARY
} from "../../core/contracts/uiCopy.js";
import { FUNDING_PATH_WARNINGS } from "../../core/contracts/warningLanguage.js";

/**
 * @param {string | undefined} status
 */
function fundingPathState(status) {
  if (status === "On Path") {
    return STATE_MATRIX.fundingPath.strongPace;
  }
  if (status === "Watch") {
    return STATE_MATRIX.fundingPath.slightlyBehind;
  }
  return STATE_MATRIX.fundingPath.materiallyBehind;
}

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

  const pathStatus = funding.pace_status ?? funding.path_status;
  if (pathStatus !== "On Path") {
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

export const fundingPathPage = {
  id: "funding-path",
  title: "Funding Path",
  render(state) {
    const funding = state.snapshots.fundingRequirement;
    const channelPlan = state.channelTargetPlan ?? null;

    return {
      header: FUNDING_PATH_SURFACE.header,
      body: FUNDING_PATH_SURFACE.body,
      core_cards: FUNDING_PATH_SURFACE.coreCards,
      core_card_helper: FUNDING_PATH_SURFACE.coreCardHelper,
      funding_requirement_snapshot: funding ?? null,
      status_block:
        funding == null
          ? null
          : {
              path_status: funding.pace_status ?? funding.path_status,
              reserve_status: state.snapshots.reserveStatus,
              field_funding_status: state.snapshots.fieldFundingStatus,
              funding_risk_level: funding.funding_risk_level,
              state_banner: fundingPathState(funding.pace_status ?? funding.path_status)
            },
      channel_target_panel: {
        ...FUNDING_PATH_SURFACE.channelTargetPanel,
        channel_target_plan: channelPlan
      },
      interpretation_block: FUNDING_PATH_SURFACE.interpretationBlock,
      warnings: buildPathWarnings(state),
      risk_flags: state.snapshots.riskFlags,
      status_chip_helper_copy: STATUS_CHIP_HELPER_COPY,
      tooltips: {
        checkpoint_target: TOOLTIP_LIBRARY.checkpointTarget,
        reserve_floor: TOOLTIP_LIBRARY.reserveFloor,
        modeled_value: TOOLTIP_LIBRARY.modeledValue
      },
      empty_state: funding == null ? FUNDING_PATH_SURFACE.emptyState : EMPTY_STATES.fundingPath
    };
  }
};
