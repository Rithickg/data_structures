// Largest number among three 

function largestNum(a,b,c){
    let largest;
    if(a >= b && a >= c){
        largest = a;
    }else if(b >= a && b >= c){
        largest = b;
    }else{
        largest = c;
    }
    return largest
}

const large = largestNum(5,7,3)
console.log(large)