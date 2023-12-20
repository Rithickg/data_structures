// function type 

function testVariable(variable){
    if(variable instanceof Function){
        console.log("Variable is function type")
    }else{
        console.log("Not an function type")
    }
}

const count = true;
const x = function(){
    console.log("Hello")
}

testVariable(count)
testVariable(x)


function testVariable1(variable){
    if(typeof variable === 'function'){
        console.log("Variable is function type")
    }else{
        console.log("Not an function type")
    }
}

const count1 = true;
const x1 = function(){
    console.log("Hello")
}

testVariable(count1)
testVariable(x1)

function testVariable1(variable){
    if(Object.prototype.toString.call(variable)== '[object Function]'){
        console.log("Variable is function type")
    }else{
        console.log("Not an function type")
    }
}

const count2 = true;
const x2 = function(){
    console.log("Hello")
}

testVariable(count2)
testVariable(x2)
