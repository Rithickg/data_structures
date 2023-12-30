// Set operations 


function setUnion(setA,setB){
    let unionSet = new Set(setA);
    for(let i of setB){
        unionSet.add(i)
    }
    return unionSet
}

const set1 = new Set(["apple","mango"])
const set2 = new Set(["grape","mango","banana"])

const result = setUnion(set1,set2)
console.log(result)

function setIntersection(setA,setB){
    let intersectionSet = new Set()
    for(let i of setB){
        if(setA.has(i)){
            intersectionSet.add(i);
        }
    }
    return intersectionSet;
}

const result1 = setIntersection(set1,set2)
console.log(result1)

function setDifference(setA,setB){
    let differenceSet = new Set(setA)
    for(let i of setB){
        differenceSet.delete(i)
    }
    return differenceSet;
}

const result2 = setDifference(set1,set2)
console.log(result2)


function subset(setA,setB){
    for(let i of setB){
        if(!setA.has(i)){
            return false
        }
        return true
    }
}

const result3 =subset(set1,set2)
console.log(result3)