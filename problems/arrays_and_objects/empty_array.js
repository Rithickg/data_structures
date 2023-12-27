// empty an array 

function emptyArray(arr){
    arr = []
    return arr;
}

console.log(emptyArray([2,4,7]))

function emptyArray1(arr){
    arr.length = 0;
    return arr
}

console.log(emptyArray1([2,4,7]))

function emptyArray2(arr){
    arr.splice(0,arr.length)
    return arr
}

console.log(emptyArray2([2,4,7]))