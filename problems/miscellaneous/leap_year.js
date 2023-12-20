// Leap year 

function leapYear(year){
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        console.log(year + ' is a leap year');
    }else{
        console.log(year + ' is not a leap year');
    }
}

leapYear(2024)

// using date 
function checkLeapYear(year){
    const date = new Date(year,1,29)
    console.log(date)
    const leap = date.getDate() 
    console.log(leap)
    if(leap === 29){
       return console.log(year + ' is a leap year');
    }else{
       return console.log(year + ' is not a leap year');
    }
}

checkLeapYear(2023)
checkLeapYear(2024)