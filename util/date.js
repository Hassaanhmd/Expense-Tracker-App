export function getFormattedDate(date) {
  return date.toISOString().slice(0, 10); // + 1 on month bc getMonth() returns index of the month (as we know it) - 1
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
