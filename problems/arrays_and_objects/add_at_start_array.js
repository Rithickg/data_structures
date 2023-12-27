// add element to start of array 

function addAtStart(arr,element){
    arr.unshift(element)
    return arr
}

console.log(addAtStart([3,5,6,3,7],9))

function addAtStart1(arr,element){
    arr.splice(0,0,element)
    return arr
}

console.log(addAtStart1([3,5,6,3,7],9))

function addAtStart2(arr,element){
   arr = [element,...arr]
   return arr
}

console.log(addAtStart2([3,5,6,3,7],9))

function addAtStart3(arr,element){
    arr = [element].concat(arr)
    return arr
}

console.log(addAtStart3([3,5,6,3,7],9))