// check wheather sting contains substring 

function checkString(str,check){
    const result = str.includes(check)
    if(result){
        console.log('contains')
    }else{
        console.log('Not contains')
    }
}

let str = 'javascript is fun'

checkString(str,'fun')

function checkString1(str,check){
    if(str.lastIndexOf(check) !== -1){
        console.log('contains')
    }else{
        console.log('not contain')
    }
}

checkString1(str,'fun')


