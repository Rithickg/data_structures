// check variable undefined or null 

function checkVariable(variable){
    if(variable == null){
        console.log("undefined or null")
    }else{
        console.log("neither undefined nor null")
    }
}

let newVal;

checkVariable(5)
checkVariable("hello")
checkVariable(null)
checkVariable(newVal)

// using typeof 

function checkVariable1(variable){
    if(typeof variable == "undefined"){
        console.log("undefined or null")
    }else{
        console.log("neither undefined nor null")
    }
}

checkVariable1(5)
checkVariable1("hello")
checkVariable1(null)
checkVariable1(newVal)