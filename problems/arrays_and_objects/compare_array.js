// compare elements of two array 

function compareArrays(arr1,arr2){
    const result = JSON.stringify(arr1) === JSON.stringify(arr2)
    if(result){
        console.log("Same")
    }else{
        console.log("Not")
    }
}

const arr1 = [1,4,7]
const arr2 = [1,4,7]
compareArrays(arr1,arr2)


// using loop 

function compareArray(arr1,arr2){
    if(arr1.length != arr2.length){
        return false;
    }else{
        let result = false;
        for(let i=0; i<arr1.length; i++){
            if(arr1[i] != arr2[i]){
                return false
            }else{
                result =true;
            }
        }
        return result;
    }
}

const arr3 = [1,6,7]
console.log(compareArray(arr1,arr3))