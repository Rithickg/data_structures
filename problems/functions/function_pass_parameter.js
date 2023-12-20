// Function as parameter 

function greet(){
    return "Welcome"
}
function message(msg){
    return `${msg}`
}

function user(name,func1,func2){
    const val = func1();
    const msg = func2("Happy day!")
    console.log(`${val} ${name} ${msg}`)
}

user('Jack',greet,message)