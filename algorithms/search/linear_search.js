// Linear Search 

function linearSearch(arr,target){
    for(let i=0;i < arr.length;i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}


const num = [1,2,4,6,3,7,9]

const search = linearSearch(num,6)
console.log(search)

const text =["ram","jack","gopal","jon","rock"] 

const search1 = linearSearch(text,"rock")
console.log(search1)