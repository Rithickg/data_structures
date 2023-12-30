// get random form Array 

function getRandom(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    const rand = arr[randomIndex]
    return rand
}

let arr = [2,3,7,2,73,4,8]
console.log(getRandom(arr))