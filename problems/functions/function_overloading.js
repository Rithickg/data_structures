// Function overloading 

function sum(){
    if(arguments.length == 0){
        console.log("No argument found")
    }else if(arguments.length == 1){
        console.log('pass atleast two arguments')
    }else{
        let result = 0;
        let length = arguments.length;
        for(let i=0; i<length; i++){
            result = result + arguments[i];
        }
        return result;
    }
}

console.log(sum(8,5,3,4))

function sumVal(){
    switch(arguments.length){
        case 0:
        console.log("No argument found")
        case 1:
        console.log('pass atleast two arguments')
        default:
            let result = 0;
            let length = arguments.length;

            for(let i=0; i<length; i++){
                result = result + arguments[i]
            }
            return result;
    }
}

console.log(sumVal(3,6,8,1))



