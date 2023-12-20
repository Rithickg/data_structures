// parameter function 

function sum(x=50,y=40){
    return x + y;
}

console.log(sum())
console.log(sum(5))
console.log(sum(8,7))

function add(x=15,y=x+5){
    return x+y
}

console.log(add())
console.log(add(5))
console.log(add(8,7))