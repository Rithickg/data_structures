// Merge Sort 

function mergeSort(arr){
    if(arr.length <=1){
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0,middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right){
    let result = []
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex])
            leftIndex++
        }else{
            result.push(right[rightIndex])
            rightIndex++
        }
    }

    // return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
    return [...result,...left.slice(leftIndex),...right.slice(rightIndex)]
}

let num = [2,6,4,7,1,3,9]
const sort =mergeSort(num)
console.log(sort)

let text = ["ram","jack","gopal","jon","rock"] 
const sort1 = mergeSort(text)
console.log(text)