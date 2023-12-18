    // Random number guess from 1 to 10 random number

function guessNumber(num){
    const random = Math.floor(Math.random() * 10) + 1;

    if(num != random){
        return "Wrong Guess"
    }else{
        return `The number ${num} is an right guess!`
    }
}

console.log(guessNumber(3))