// convert first letter of string 

function capitalizeFirstLetter(str){
    const upperCaseLetter = str.charAt(0).toUpperCase()
    // const upperCaseLetter =  str[0].toUpperCase()
    const capitalize =  upperCaseLetter + str.slice(1)
    return capitalize;
}

let str ="this is javascript"
console.log(capitalizeFirstLetter(str))


// using regex 

function capitalizeFirstLetter1(str){
    const capitalize = str.replace(/^./,str[0].toUpperCase())
    return capitalize;
}
let str1 ="welcome to javascript"

console.log(capitalizeFirstLetter1(str1))
