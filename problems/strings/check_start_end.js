// check if string starts and ends with particular word 

function checkStartEnd(str,start,end){
    if(str.startsWith(start) && str.endsWith(end)){
        console.log(`the string starts with "${start}" and ends with "${end}"`)  
    }else if(str.startsWith(start)){
        console.log(`the string starts with "${start}" but not ends with "${end}"`)
    }else if(str.endsWith(end)){
        console.log(`the string not starts with "${start}" but ends with "${end}"`)
    }else{
        console.log(`the string not starts with "${start}" and not ends with "${end}"`)
    }
}

let str = 'javascript is easy to learn'
checkStartEnd(str,'javascript','learn')
checkStartEnd(str,'j','n')


// using regex 

function checkString(str,start,end){
    const startRegex = new RegExp(`^${start}i`)
    const endRegex =  new RegExp(`${end}$i`)
    if(startRegex.test(str) && endRegex.test(str)){
        console.log(`the string starts with "${start}" and ends with "${end}"`)  
    }else if(startRegex.test(str)){
        console.log(`the string starts with "${start}" but not ends with "${end}"`)
    }else if(endRegex.test(str)){
        console.log(`the string not starts with "${start}" but ends with "${end}"`)
    }else{
        console.log(`the string not starts with "${start}" and not ends with "${end}"`)
    }
}

checkString(str,'j','n')
checkString(str,'javascript','to') 