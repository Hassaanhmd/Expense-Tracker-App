export function getFormattedDate(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`; // + 1 on month bc getMonth() returns index of the month (as we know it) - 1
}