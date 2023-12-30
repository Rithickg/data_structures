// generate random string 


function generateString(stringLength){
    let result ='';
    const characters = 'QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789'

    for(let i=0; i<stringLength; i++){
        let rand = Math.floor(Math.random()* characters.length)
        result += characters.charAt(rand);
    }
    return console.log(result)
}

generateString(10)


// using built in 

function generateString1(){
    const result = Math.random().toString(36).substring(2,7);
    return console.log(result)
}

generateString1()