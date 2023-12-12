// Binary Search 

// Only works on sorted array so sort before search  

function binarySearch(arr,target){
    let low = 0;
    let high = arr.length - 1;
    while(low <= high){
        const mid = Math.floor((low + high) / 2);
        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] < target){
            low = mid + 1
        }else{
            high = mid - 1
        }
    }
    return -1;
}


let num = [3,1,5,7,9,2,6,8,4]
num = num.sort()
const search = binarySearch(num,4)
console.log(search)

let text =["ram","jack","gopal","jon","rock"]
text = text.sort()
const search1 =binarySearch(text,"jon")
console.log(search1)