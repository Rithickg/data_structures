// ASCII value of an character 

function ASCII(string){
    const result = string.charCodeAt(0)
    return result;
}

console.log(ASCII('r'))

function ASCIIValue(string){
    const result = string.codePointAt(0)
    return result;
}

console.log(ASCIIValue('abc'))
