// Fibonacci Sequence 

function fibonacci(n, memo={}){
    if(n <= 1){
        return n;
    }

    if(n in memo){
        return memo[n];
    }

    memo[n]=fibonacci(n-1,memo) + fibonacci(n-2,memo)
        return memo[n]
    
}

const input =6
const result = fibonacci(input)
console.log(result)