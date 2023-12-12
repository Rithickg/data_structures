// Selection Sort 

function selectionSort(arr){
     const n = arr.length
     for(let i = 0; i < n; i++){
        let minIndex = i; 
        for(let j = i + 1; j < n; j++){
         if(arr[j] < arr[minIndex]){
            minIndex = j;
         }
        }
     [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]];
     }
     return arr;
}

let num = [2,6,4,7,1,3,9]
const sort =selectionSort(num)
console.log(sort)

let text = ["ram","jack","gopal","jon","rock"] 
const sort1 = selectionSort(text)
console.log(text)