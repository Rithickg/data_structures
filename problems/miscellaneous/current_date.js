// current date 

function currentDate(){

    const date = new Date()
    console.log(date)
    const n = date.toDateString()
    const time = date.toLocaleTimeString()

    console.log('date:', n)
    console.log('time:', time)
}

currentDate()