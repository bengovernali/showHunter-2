function formatTime(hours, minutes) {
    
    let amPm = 'AM';
    
    if (hours > 12) {
        hours -= 12;
        amPm = 'PM';
    }

    if (minutes.toString().length < 2) {
        minutes = '0' + minutes.toString();
    }

    const newTime = `${hours}:${minutes} ${amPm}`;
    return newTime;
}