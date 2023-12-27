// remove duplicate array 

function removeDuplicate(arr){
    let uniqueArr = []

    for(let i of arr){
        if(uniqueArr.indexOf(i) === -1){
            uniqueArr.push(i)
        }
    }
    console.log(uniqueArr)
}

removeDuplicate([3,5,2,5,3,6])

// using set 

function getUnique(arr){
    let uniqueArr = [...new Set(arr)]
    console.log(uniqueArr)
}

getUnique([6,8,3,6,2,4])


// using loop 
function removeDuplicateItem(arr){
    let uniqueArr = []
    for(let i=0; i<arr.length; i++){
        if(uniqueArr.indexOf(arr[i]) === -1){
            uniqueArr.push(arr[i])
        }
    }
    console.log(uniqueArr)
}

removeDuplicateItem([3,5,2,5,3,6])

// using filter 

function removeUsingFilter(arr){
    return arr.filter((value,index)=>arr.indexOf(value)=== index)
}

console.log(removeUsingFilter([3,5,2,5,3,6]))

