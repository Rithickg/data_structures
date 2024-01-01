// check occurence of character in string 

function countCharacterOccurence(str,letter){
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(str.charAt(i) == letter){
            count+=1
        }
    }
    return count
}

let str = "This is javascript"
console.log(countCharacterOccurence(str,'i'))

// using regex 
function countCharacterOccurence1(str,letter){
    const re = new RegExp(letter,'g');
    const count = str.match(re).length;
    return count;
}

console.log(countCharacterOccurence1(str,'i'))


function countCharacterOccurence2(str,letter){
    let count =0;
    const words = str.split('')
    for(let i=0; i<words.length; i++){
        if(words[i] == letter){
            count++
        }
    }
    console.log(count)
}

countCharacterOccurence2(str,'i')

