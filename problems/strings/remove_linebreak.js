// replace all line break 

function removeLinebreak(str){
    const result = str.replace(/(\r\n|\r|\n)/g,"<br>")
    return console.log(result)
}

let str =`This is an javascript program.
It is best programming language.
It is used for web dev.`
removeLinebreak(str)

function removeLinebreak1(str){
    const result = str.split('\n').join('<br>')
    return console.log(result)
}

removeLinebreak1(str)