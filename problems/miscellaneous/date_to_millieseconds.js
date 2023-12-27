// date to millie seconds 

function dateToMillieSeconds(dateString){
    const date = new Date(dateString);
    return date.getTime()
}

console.log(dateToMillieSeconds("2023-12-23T12:00:00"))

