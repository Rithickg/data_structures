// merge two array and remove duplicate 

function getUniqueAfterMerge(arr1,arr2){
    let arr = arr1.concat(arr2)
    let uniqueArr = []

    for(let i=0; i<arr.length; i++){
        if(uniqueArr.indexOf(arr[i]) === -1){
            uniqueArr.push(arr[i])
        }
    }
    console.log(uniqueArr)
}

getUniqueAfterMerge([3,4,2,5,3,4],[4,5,7,2,9,5])

function getUniqueAfterMerge1(arr1,arr2){
    let arr = arr1.concat(arr2)
    let uniqueArr = []

    for(let i of arr){
        if(uniqueArr.indexOf(i) === -1){
            uniqueArr.push(i)
        }
    }
    console.log(uniqueArr)
}

getUniqueAfterMerge1([3,4,2,5,3,4],[4,5,7,2,9,5])


function getUniqueAfterMerge2(arr1,arr2){
    let arr = [...arr1,...arr2]
    let uniqueArr = [...new Set(arr)]
    console.log(uniqueArr)
}

getUniqueAfterMerge2([3,4,2,5,3,4],[4,5,7,2,9,5])
