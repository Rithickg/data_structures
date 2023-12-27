// date to minute 

function dateToMinute(dateString){
    const date = new Date(dateString);

    const milliseconds = date.getTime()

    const minute = milliseconds / 60000

    return minute;
}

console.log(dateToMinute("2023-12-28T12:00:00"))