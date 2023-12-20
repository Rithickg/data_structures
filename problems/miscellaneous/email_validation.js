// Email validation 

function validateEmail(email){
    const regex_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
    const valid = regex_pattern.test(email)
    if(valid){
        console.log(`${email} is valid`)
    }else{
        console.log(`${email} is in-valid`)
    }
}

validateEmail("rock@gmail.com")
validateEmail("roc#k@gmail.com")