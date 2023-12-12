// Radix Sort 

function getDigit(num,place){
    return Math.floor(Math.abs(num) / Math.pow(10,place)) % 10;
}

console.log(getDigit(43263,0))

function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(digitCount(3435))


function mostDigits(nums){
    let maxDigits = 0;
    for(let i=0; i<nums.length; i++){
        maxDigits = Math.max(maxDigits,digitCount(nums[i]))
    }
    return maxDigits;
}

console.log(mostDigits([44,345,6533,23435]))

function radixSort(arrOfNums){
    let maxDigitCount = mostDigits(arrOfNums);

    for(let k = 0; k<maxDigitCount; k++){
        let digitBuckets = Array.from({length : 10},()=>[])
   
    for(let i=0; i<arrOfNums.length; i++){
        let digit = getDigit(arrOfNums[i],k);
        digitBuckets[digit].push(arrOfNums[i])
    }

    arrOfNums = [].concat(...digitBuckets)

   }
   return arrOfNums;
}
const sort = radixSort([2,435,642,12324,5644,45])
console.log(sort)