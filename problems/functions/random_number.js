// Generate Random Number 

const rand = Math.random()
console.log(rand)

function generateNum(highestNumber,lowestNumber){
    const rand = Math.random() * (highestNumber - lowestNumber) + lowestNumber
    const roundNum = Math.floor(rand)
        console.log(roundNum)
}

generateNum(100,10)

function maxMin(max,min){
    const maxMin = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(maxMin)
}

generateNum(20,25)