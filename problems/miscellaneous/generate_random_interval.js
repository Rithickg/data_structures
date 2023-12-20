// Random interval value 

function randomIntervalValue(start,end){
    const rand = Math.floor(Math.random() * (end - start + 1)) + start;
    return rand;
}

console.log(randomIntervalValue(55,85))