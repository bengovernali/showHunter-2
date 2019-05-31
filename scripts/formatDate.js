function formatDate(date) {
    let dateArray = date.split('-');
    let newDate = `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`;
    return newDate;
}