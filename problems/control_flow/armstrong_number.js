// Armstrong Number 

function isArmStrongNumber(num){
    const numString = num.toString();
    const numDigits = numString.length;
    let sum = 0;

    // for(let i=0; i<numDigits; i++){
    //     sum += Math.pow(parseInt(numString[i]),numDigits)
    // }

    for(let digit of numString){
        sum += Math.pow(parseInt(digit),numDigits)
    }

    if(sum === num){
        console.log(`${num} is an armstrong number`)
    }else{
        console.log(`${num} is not an armstrong number`)

    }
}

isArmStrongNumber(153)