// trim string 

function trimString(str){
    const trim = str.trim()
    return console.log(trim)
}

let str = "    This is javascript program.    ";
console.log(str)
trimString(str)


function trimString1(str){
    const trim = str.replace(/^\s+|\s+$/g,'')
    return console.log(trim)
}

trimString1(str)