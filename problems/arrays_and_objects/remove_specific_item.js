// remove specific item from array 

function removeItemFromArray(array,n){
    const newArray = [];
    for(let i=0; i<array.length; i++){
        if(array[i] !== n){
            newArray.push(array[i])
        }
    }
    return newArray;
}

const result = removeItemFromArray([1,3,4,5,6,3,6,2],3)
const result1 = removeItemFromArray(["ram","jack","rock","ram"],"ram")
console.log(result)
console.log(result1)


// using splice 

function removeItem(array,n){
    const index = array.indexOf(n)
    if(index > -1){
        array.splice(index,1)
    }
    return array
}

const result2 = removeItem([1,3,4,5,6,3,6,2],3)
const result3 = removeItem(["ram","jack","rock","ram"],"ram")
console.log(result2)
console.log(result3)