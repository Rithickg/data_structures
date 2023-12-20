//  Check if number is float or integer 

function checkNumber(num){
    if(typeof num == 'number' && !isNaN(num)){
        if(Number.isInteger(num)){
            console.log(`${num} is integer`)
        }else{
            console.log(`${num} is float`)
        }
    }else{
        console.log(`${num} is not a number`)
    }
}

checkNumber(50)
checkNumber("hello")
checkNumber(23.3)


// using regix pattern 

function checkNumber1(num){
    let regixPattern = /^-?[0-9]+$/;
    let valid = regixPattern.test(num);
    if(valid){
        console.log(`${num} is integer`)
    }else{
        console.log(`${num} is float`)

    }
}

checkNumber1(50)
checkNumber1(23.3)
