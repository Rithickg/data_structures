// Armstrong Number 

function isArmStrongNumber(num){
    const numString = num.toString();
    const numDigits = numString.length;
    let sum = 0;

    for(let digit of numString){
        sum += Math.pow(parseInt(digit),numDigits)
    }

    if(sum === num){
        return true;
    }else{
        return false;

    }
}

function armstrongIntervals(start,end){
    for(let i=start; i<=end; i++){
        if(isArmStrongNumber(i)){
            console.log(i)
        }
    }
}

armstrongIntervals(100,1000)