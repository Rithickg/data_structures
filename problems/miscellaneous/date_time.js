// Date and Time 

function date(){
    const date = new Date(2023,11,19,6,3,25);
    console.log("Custom date",date)

    const n = date.toDateString()
    console.log(n);

    const time = date.toLocaleTimeString()
    console.log(time)

    const da = new Date()
    console.log("new date",da)
}

date()