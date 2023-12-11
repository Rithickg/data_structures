// Array 
let fruits = ["mango","orange","apple","banana"]
console.log(fruits)
fruits[0]="strawberry"
console.log(fruits[0])
console.log(fruits[3])
console.log(fruits.length)


let lastFruit = fruits.pop()
console.log(lastFruit)
console.log(fruits)
 
for(i=0;i<fruits.length;i++){
    console.log(fruits[i])
}

fruits.forEach((fruit)=>{
    console.log(fruit)
})


let index = fruits.indexOf("orange")
console.log(index)

let exists = fruits.includes("apple")
console.log(exists)

let slice = fruits.slice(1,3)
console.log(slice)
console.log(fruits)

let splice =fruits.splice(1,2,"kiwi","pineapple")
console.log(fruits)

let matrix = [
    [2,4,6],
    [4,5,8],
    [2,5,7]
]
console.log(matrix[2])
console.log(matrix[1][2])

matrix[1][2]=10;
console.log(matrix)


for(let row =0;row<matrix.length; row++){
    console.log("row",matrix[row])
}

matrix.forEach((row)=>{
    console.log(row)
})

for(let row=0;row<matrix.length;row++){
    for(let column=0;column<matrix.length;column++){
        console.log("row,column",matrix[row][column])
    }
}

matrix.push([3,9,1])
console.log(matrix)

matrix.pop()
console.log(matrix)

matrix.unshift([4,3,5])
console.log("unshift",matrix)

matrix.shift()
console.log(matrix)

for(i=0 ;i<matrix.length;i++){
    matrix[i].push(13)
}
console.log(matrix)

for(i=0;i<matrix.length;i++){
    matrix[i].pop()
}

console.log("pop",matrix)

function transpose(matrix){
    return matrix[0].map((col,i)=>
        matrix.map((row)=>row[i])
    )
}

let transposeMatrix =transpose(matrix)
console.log(transposeMatrix)


let flattenArray = matrix.flat()
console.log("flatten",flattenArray)


const numbers = [2,7,4,6,8,3,5]

let double=[]

numbers.forEach((num)=>{
    double.push(num*2)
})
console.log("double",double)

let square=[]
for(let i=0;i<numbers.length;i++){
    square.push(numbers[i]**2)
}
console.log("square",square)

let triple = numbers.map((num)=>num*3)
console.log(triple)

let even =numbers.filter((num)=>num % 2 ===0)
console.log("even",even)

let sum =numbers.reduce((acc,num)=> acc + num,0)
console.log("sum",sum)


let result =numbers
            .map((num)=>num**2)
            .filter((square)=>square % 2 === 0)
            .reduce((acc,square)=>acc + square,0)

console.log(result)
