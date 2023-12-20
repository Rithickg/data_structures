// Recursive factorial of a number 

function factorial(num){
    if(num == 0){
        return 1;
    }else if(num<=0){
        return "number cannot be negative"
    }else{
        return num * factorial(num - 1);
    }
}

let result = factorial(5)
console.log(result)