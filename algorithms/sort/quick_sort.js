// Quick Sort 

function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for(let i = 1; i<arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }

    // return quickSort(left).concat(pivot, quickSort(right)); 
    return [...quickSort(left),pivot,...quickSort(right)];
}


let num = [2,6,4,7,1,3,9]
const sort = quickSort(num)
console.log(sort)

let text = ["ram","jack","gopal","jon","rock"] 
const sort1 = quickSort(text)
console.log(text)