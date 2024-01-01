// replace all occurence of string 

function replaceOccurenceString(str,replace,replaceWith){
    const words = str.split(replace)
    const newStr = words.join(replaceWith)
    return console.log(newStr)
}

let str = 'this is javascript and it is very easy to learn'
replaceOccurenceString(str,'is','was')



// using regex 

function replaceOccurenceString1(str,replace,replaceWith){
    const regex = new RegExp(replace,'g');
    const newStr = str.replace(regex,replaceWith);
    return console.log(newStr)
}

replaceOccurenceString1(str,'is','was')