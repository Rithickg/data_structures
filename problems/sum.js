// Sum 

function sum(a,b){
    return a + b
}



function sumOfNumbers(...numbers){
    return numbers.reduce((sum,num)=> sum + num, 0);
}

const sum1 = sum(4,6)
const sum2 = sumOfNumbers(2,4,62,5,64,4)
console.log(sum1)
console.log(sum2)