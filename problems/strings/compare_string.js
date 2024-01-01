// compare string 

function compareString(str1,str2){
    const result = str1.toUpperCase() === str2.toUpperCase()
    if(result){
        console.log('same')
    }else{
        console.log('not same')
    }
}

let str1 = 'fun'
let str2 = 'fun'
compareString(str1,str2)


function compareString1(str1,str2){
    const pattern = new RegExp(str1,'gi')
    const result = pattern.test(str2)
    if(result){
        console.log('same')
    }else{
        console.log('not same')
    }
}


compareString1(str1,str2)


function compareString2(str1,str2){
    const result = str1.localeCompare(str2,undefined,{sensitivity:'base'})
    if(result == 0){
        console.log('same')
    }else{
        console.log('not same')
    }
}


compareString2(str1,str2)


