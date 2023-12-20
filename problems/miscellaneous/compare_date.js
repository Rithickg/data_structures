// Compare dates 

function compareDate(){
    const d1 = new Date()
    const d2 = new Date()

switch (true){
        case d1.getTime() === d2.getTime():
            console.log(`${d1} is equal to ${d2}`)
            break;
        case d1.getTime() < d2.getTime():
            console.log(`${d1} is less than ${d2}`)
            break;
        case d1.getTime() > d2.getTime():
                console.log(`${d1} is greater than ${d2}`)
                break;
        default:
            console.log("Invalid comparison.")
            break;
    }
}

compareDate()

// pass in function 

function compareDate1(d1,d2){
switch (true){
        case d1.getTime() === d2.getTime():
            console.log(`${d1} is equal to ${d2}`)
            break;
        case d1.getTime() < d2.getTime():
            console.log(`${d1} is less than ${d2}`)
            break;
        case d1.getTime() > d2.getTime():
                console.log(`${d1} is greater than ${d2}`)
                break;
        default:
            console.log("Invalid comparison.")
            break;
    }
}
const date1 = new Date('2022-01-01')
const date2 = new Date('2023-01-01')
compareDate1(date1,date2)