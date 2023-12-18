// Same last digit 

function sameLastDigit(a,b,c){
    const result1 = a % 10;
    const result2 = b % 10;
    const result3 = c % 10;

    if(result1 === result2 && result1 === result3){
        console.log(`same last digit of ${result1}`)
    }else{
        console.log("Not same last digit")
    }
}

sameLastDigit(55,65,75)