export function getYearsSince(date: Date): number {
  const diffMs = Date.now() - date.getTime();
  const d = new Date(diffMs);
  return Math.abs(d.getUTCFullYear() - 1970);
}

export function getMonthsSince(date: Date): number {
  const dayCompensation = new Date().getDate() > date.getDate() ? 0 : 1;
  const monthsElapsedThisYear = new Date().getMonth();
  if (monthsElapsedThisYear > date.getMonth()) {
    return monthsElapsedThisYear - date.getMonth() - dayCompensation;
  } else {
    return monthsElapsedThisYear + (12 - date.getMonth()) - dayCompensation;
  }
}