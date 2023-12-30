// remove whitespaces 

function removeWhitespace(str){
    const result = str.split(" ").join("");
    console.log(result)
}

let str = "This   is javascript    program";
removeWhitespace(str)

function removeWhitespace1(str){
    const result = str.replace(/\s/g,'')
    return console.log(result)
}

removeWhitespace1(str)