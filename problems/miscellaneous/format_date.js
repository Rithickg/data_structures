// Format Date 

function formatDate(){
    let currentDate = new Date();
    console.log(currentDate)
    let day = currentDate.getDate()
    console.log(day)
    let month = currentDate.getMonth()
    console.log(month)
    let year = currentDate.getFullYear()
    console.log(year)

    // formatting 

    if(day < 10){
        day = '0' + day
    }

    if(month < 10){
        month = '0' + month;
    }

    // various formats 
    const formattedDate1 = day + '/' + month + '/' + year
    const formattedDate2 = day + '-' + month + '-' + year

    console.log(formattedDate1)
    console.log(formattedDate2)

}

formatDate()