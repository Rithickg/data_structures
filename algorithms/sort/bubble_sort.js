// Bubble sort 

function bubbleSort(arr){
    const n = arr.length - 1;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

let num = [2,6,4,8,9,0,3,7,1]
const sort = bubbleSort(num)
console.log(sort)

let text =["ram","jack","gopal","jon","rock"] 
const sort1 = bubbleSort(text)
console.log(text)