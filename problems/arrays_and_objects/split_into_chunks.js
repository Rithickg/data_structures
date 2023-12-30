// split array into small chunk 

function splitIntoChunk(arr,chunk){
    for(let i=0; i<arr.length; i+=chunk){
        let tempArr;
        tempArr = arr.slice(i,i+chunk)
        console.log(tempArr)
    }
}

const arr = [1,3,5,6,8,9]
const chunk = 2;
splitIntoChunk(arr,chunk)

// using splice 

function splitIntoChunks(arr,chunk){
    while(arr.length>0){
        let tempArr;
        tempArr = arr.splice(0,chunk)
        console.log(tempArr)
    }
}

splitIntoChunks(arr,3)