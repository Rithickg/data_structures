// Leap year interval 

function learYear(startYear,endYear){
    const learYear = [];

    for(let year = startYear; year <= endYear; year++){
        if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
            learYear.push(year)
        }
    }

    return learYear;
}

console.log(learYear(2000,2100));