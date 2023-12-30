// Reverse a string 

function reverseString(str){
    let newStr ="";
    for(let i=str.length-1; i>=0; i--){
        newStr += str[i]
    }
    return newStr;
}

let str = "This is a javascript"
console.log(reverseString(str))


// using built-ins 
function reverseString1(str){
    const arr =str.split("")
    const rev = arr.reverse()
    const join = rev.join("")
    return join;
}

console.log(reverseString1(str))