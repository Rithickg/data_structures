// check is an array 

function checkObject(arr){
    const result = Array.isArray(arr)
    if(result){
        console.log("array")
    }else{
        console.log("not array")
    }

}

const arr = [1,4,6,8]
console.log(typeof arr)
checkObject(arr)