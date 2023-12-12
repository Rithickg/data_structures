// Insertion Sort 

function insertionSort(arr){
    const n = arr.length;
    for(let i = 0; i < n; i++){
       let currentValue = arr[i];
       let j;
       for(j = i - 1; j >= 0 && arr[j] > currentValue; j--){
        arr[j + 1] = arr[j]
       }
       arr[j + 1] = currentValue
    }
    return arr;
}

let num = [2,6,4,7,1,3,9]
const sort = insertionSort(num)
console.log(sort)

let text = ["ram","jack","gopal","jon","rock"] 
const sort1 = insertionSort(text)
console.log(text)