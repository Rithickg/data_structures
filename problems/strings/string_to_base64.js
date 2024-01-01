// encode string to base64 

function stringToBase64(str){
    // encode string 
    const encodeString = window.btoa(str)
    console.log(encodeString)
    // decode string 
    const decodeString = window.atob(result)
    console.log(decodeString)
}

let str = "This is javascript"
stringToBase64(str)

function encodeStringToBase64(str){
    const result = Buffer.from(str).toString('base64')
    console.log(result)
}

let str1 = "programmer"
encodeStringToBase64(str1)   