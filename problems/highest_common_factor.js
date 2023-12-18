// Highest common factor or Greatest common divisor (without a remainder) of two numbers

function hcfOrGcd(num1,num2){
    let hcf;
    for(let i=1; i<=num1 && i<=num2; i++){
        if(num1 % i === 0 && num2 % i ===0){
            hcf = i;
        }
    }
    return hcf;
}

console.log(hcfOrGcd(55,65))

// using while loop 
function hcfOrGcd1(num1,num2){
    while(num1 != num2){
        if(num1 > num2){
            num1 -=num2;
        }else{
            num2 -= num1;
        }
    }
    return num1;
}

console.log(hcfOrGcd1(52,82))