export function formatDate(dateString) {
    const [day, month, year] = dateString.split('-');
    const correctFormatDate = `${month}-${day}-${year}`;
    const date = new Date(correctFormatDate);
    const options = { month: 'short', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
}
