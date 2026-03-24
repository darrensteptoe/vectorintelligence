/**
 * @param {string} isoDate
 * @returns {Date}
 */
function asDate(isoDate) {
  const d = new Date(isoDate);
  if (Number.isNaN(d.valueOf())) {
    throw new Error(`Invalid ISO date: ${isoDate}`);
  }
  return d;
}

/**
 * @param {Date} d
 * @returns {string}
 */
function monthKey(d) {
  const year = d.getUTCFullYear();
  const month = `${d.getUTCMonth() + 1}`.padStart(2, "0");
  return `${year}-${month}`;
}

/**
 * @param {string} startIso
 * @param {string} endIso
 * @returns {string[]}
 */
export function monthsBetween(startIso, endIso) {
  const start = asDate(startIso);
  const end = asDate(endIso);

  const cursor = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), 1));
  const stop = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), 1));

  /** @type {string[]} */
  const months = [];
  while (cursor <= stop) {
    months.push(monthKey(cursor));
    cursor.setUTCMonth(cursor.getUTCMonth() + 1);
  }

  if (months.length === 0) {
    months.push(monthKey(start));
  }

  return months;
}

/**
 * @param {Record<string, number>} monthly
 * @returns {string | null}
 */
export function peakMonth(monthly) {
  let maxMonth = null;
  let max = -Infinity;

  for (const [month, amount] of Object.entries(monthly)) {
    if (amount > max) {
      max = amount;
      maxMonth = month;
    }
  }

  return maxMonth;
}

/**
 * @param {string | undefined} isoDate
 * @returns {string | null}
 */
export function monthFromIso(isoDate) {
  if (!isoDate) {
    return null;
  }
  return monthKey(asDate(isoDate));
}

/**
 * @param {Record<string, number>} monthly
 * @param {string | null} checkpointMonth
 * @returns {number}
 */
export function sumThroughMonth(monthly, checkpointMonth) {
  if (!checkpointMonth) {
    return 0;
  }
  let total = 0;
  for (const [month, amount] of Object.entries(monthly)) {
    if (month <= checkpointMonth) {
      total += amount;
    }
  }
  return total;
}

/**
 * @param {string[]} months
 * @returns {number}
 */
export function countWeeksInMonths(months) {
  // Simple operational approximation for weekly goal-setting.
  return Math.max(1, Math.round(months.length * 4.345));
}
