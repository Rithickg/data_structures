// factors of a number 

function factorsOfNumber(num){
    for(let i=1; i<=num; i++){
        if(num % i == 0){
            console.log(i)
        }
    }
}

factorsOfNumber(12)