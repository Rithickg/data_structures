// Sum of natural numbers 

function naturalNumbers(num){
    let sum = 0;
    for(let i=1; i<=num; i++){
        sum += i;
    }
    return sum;
}

console.log(naturalNumbers(100))


function naturalNumberSum(num){
    let sum = 0;
    let i = 1;
    while(i<=num){
        sum += i; 
        i++;
    }
    return sum
}

console.log(naturalNumberSum(4))