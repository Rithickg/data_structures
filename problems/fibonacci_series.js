// Fibonacci Series 

// Using dynamic Programming 
function fibonacci(num){
    let fibSeries = [0,1];
    for(let i=2; i<=num; i++){
        fibSeries.push(fibSeries[i-1] + fibSeries[i-2])
    }
    console.log(fibSeries)
    return fibSeries[num];
}

console.log(fibonacci(10))

// Using recursion 
function fibonacciSeries(num){
    if(num<=1){
        return num;
    }
    return fibonacciSeries(num-1) + fibonacciSeries(num-2)
}

console.log(fibonacciSeries(10))