// check if string starts with another string 

function checkStringStart(str,check){
    if(str.startsWith(check)){
        console.log(`the string starts with ${check}`)
    }else{
        console.log(`the string does not starts with ${check}`)
    }
}

let str = 'This is javascript'
checkStringStart(str,'This')

function checkStringStart1(str,check){
    let result = str.lastIndexOf(check,0)===0;
    if(result){
        console.log(`the string starts with ${check}`)
    }else{
        console.log(`the string does not starts with ${check}`)
    }
}

checkStringStart1(str,'This')

// using regex 

function checkStringStart2(str,check){
    let pattern = new RegExp(`^${check}`)
    const result = pattern.test(str)
    if(result){
        console.log(`the string starts with ${check}`)
    }else{
        console.log(`the string does not starts with ${check}`)
    }
}

checkStringStart2(str,'Thisdd')
checkStringStart2(str,'This')


