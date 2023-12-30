// replace character of string 

function replaceCharacter(str,replaceWord,replaceWith){
    const text = str.replace(replaceWord,replaceWith)
    return console.log(text)
}

let str ="This is Javascript program"
replaceCharacter(str,"This","It")

function replaceCharacter1(str,replaceWord,replaceWith){
    const regex =/replaceWord/g
    const text = str.replace(regex,replaceWith)
    return console.log(text)
}

let str1 ="This is Javascript program"
replaceCharacter(str1,"program","Language")