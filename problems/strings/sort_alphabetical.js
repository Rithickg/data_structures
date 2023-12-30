// sort in alphabetical order 

function sortAlphabatical(str){
    const words = str.split('')
    words.sort()
    for(let element of words){
        console.log(element)
    }
   let w = words.join('')
    return console.log(w)
}

let str = "This is javascript"
sortAlphabatical(str)



