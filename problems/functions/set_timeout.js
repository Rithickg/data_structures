// Set Timeout 

function greet(){
    console.log("Hello World")
}

setTimeout(greet,3000)
console.log("this is shown first")


// passing parameter to settimeout function 
function welcome(firstName,lastName){
    console.log(firstName)
    console.log(lastName)
}

setTimeout(welcome,5000,"Ram","Kumar")