// Least common multiple 

function leastCommonMultiple(num1,num2){
    let min = (num1 > num2) ? num1 : num2;
    console.log(min)

    while(true){
        if(min % num1 == 0 && min % num2 == 0){
            console.log(`lcm of ${num1} and ${num2} is ${min}`);
            break;
        }
        min++;
    }
}

leastCommonMultiple(8,6)

// using hfc method to find lcm 
function lcm(num1,num2){
    let hcf;
    for(let i=0; i<=num1 && i<=num2; i++){
        if(num1 % i == 0 && num2 % i == 0){
            hcf =i;
        }
    }
    let lcm =(num1 * num2) / hcf;
    return lcm;
}

console.log(lcm(6,8))