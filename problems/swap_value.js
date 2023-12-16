// Swap values 

function swap(a,b){
    // using temp value 
    temp = a;
    a = b;
    b = temp;
    return {a,b}
}

console.log(swap(5,7))

function swap1(a,b){
    // using destructuring 
    [a,b] = [b,a]
    return [a,b]
}

console.log(swap1(8,2))

function swap2(a,b){
    a = a + b;
    b = a - b;
    a = a - b;
    return [a,b]
}

console.log(swap2(3,7))


function swap3(a,b){
    // using bitwise XOR operator 
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    return {a,b}
}

console.log(swap3(8,9))