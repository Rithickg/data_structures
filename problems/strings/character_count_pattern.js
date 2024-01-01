// count and print occurence in order 
// aabbbcccc = a2b3c4 

function countOccurencePrint(str){
    let wordCount= {}
    const words = str.split('')
    for(let i=0; i<words.length; i++){
        if(wordCount[words[i]] == undefined){
            wordCount[words[i]] = 1
        }else{
            wordCount[words[i]]++
        }
    }
    console.log(wordCount)
    
    let newStr = ''
    for(let count in wordCount){
        newStr = newStr + count + wordCount[count]
    }
    return newStr; 
}
let str = 'aabbbcccc'
let str1 = 'aabbbccccddddd'

console.log(countOccurencePrint(str))
console.log(countOccurencePrint(str1))


function countOccurencePrint1(str){
    let wordCount = {}
    for(let char of str){
        wordCount[char] = (wordCount[char] || 0) + 1;
    }
    console.log(wordCount)
    
    let newStr =''
    for(let char in wordCount){
        newStr = newStr + char + wordCount[char]
    }
    return newStr;
}

console.log(countOccurencePrint1(str))
console.log(countOccurencePrint1(str1))


