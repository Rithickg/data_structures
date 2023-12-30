// array object property value 

function extractValue(arr,prop){
    let extractedValue = arr.map(item=>item[prop])
    
    return extractedValue;
}


const objArr = [{a:1,b:5},{a:3,b:9},{a:4,b:8}]
const result =extractValue(objArr,'b')
console.log(result)


function extractValues(arr,prop){
    let extractedValue = []
    for(let i=0; i<arr.length; i++){
        extractedValue.push(arr[i][prop]);
    }
    return extractedValue;
}

const result1 = extractValues(objArr,'a')
console.log(result1)