// intersection two array 

function intersection(arr1,arr2){
    let set1 = new Set(arr1)
    let set2 = new Set(arr2)
    let intersection =[]
    for(let i of set2){
        if(set1.has(i)){
            intersection.push(i);
        }
    }
    return intersection
}

let arr1 = [4,6,3,7,3,6]
let arr2 = [6,6,8,3,8,5,4]
console.log(intersection(arr1,arr2))

// using filter 

function intersectionFilter(arr1,arr2){
    const intersection = arr1.filter(x=> arr2.indexOf(x) !== -1)
    return intersection
}

console.log(intersectionFilter(arr1,arr2))

function intersectionFilter1(arr1,arr2){
    const intersection = arr1.filter(x=>arr2.includes(x))
    return intersection
}

console.log(intersectionFilter1(arr1,arr2))