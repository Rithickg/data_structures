// print all prime numbers 

function isPrime(num){
    if(num <=1) return false
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true; 
}

function primeIntervals(start,end){
    for(let i= start; i<=end; i++){
        if(isPrime(i)){
            console.log(i)
        }
    }
}

primeIntervals(5,20)