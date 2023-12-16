// Factorial 

function factorial(num){
    if(num < 0){
        console.log("Factorial for negative number is not possible")
    }else if(num === 0){
        console.log("The factorial of zero is 1")
    }else{
        let fact = 1;
        for(let i = 1; i<=num; i++){
            fact *= i;
        }
        console.log(`Factorial of ${num} is ${fact}`)
    }
}

factorial(5)