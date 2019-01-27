
// Format the date object and return string
export function formatDate(date) {
    // Get first 10 chars of date ie yyyy-mm-dd
    return date.toISOString().slice(0, 10);
}   