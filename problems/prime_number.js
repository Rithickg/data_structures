// Prime Number 

function primeNumber(num){
    let isPrime = true 
    if(num === 1){
        console.log("1 is neither prime nor composite number")
    }else if(num > 1){
        for(let i = 2; i<num; i++){
            if(num % i == 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            console.log("Prime")
        }else{
            console.log("Not Prime")
        }
    }
}

primeNumber(4)