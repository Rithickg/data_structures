// append object 

function insertObject(arr,obj){
    arr.push(obj)
    console.log(arr)
}

let arr = [3,5,7]
let obj = {x:34,y:65}

insertObject(arr,obj)

// using splice 

function insertObject1(arr,index,obj){
    arr.splice(index,0,obj)
    console.log(arr)
}

insertObject1(arr,1,obj)

// using spread 

function insertObject2(arr,obj){
    arr =[...arr,obj]
    console.log(arr)
}

insertObject2(arr,obj)