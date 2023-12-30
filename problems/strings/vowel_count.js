// count vowels 

function countVowel(str){
    const count = str.match(/[aeiou]/gi).length;
    return console.log(count)
}

let str =`This is an javascript program.
It is best programming language.
It is used for web dev.`

countVowel(str)


// using loops 

function countVowel1(str){
    let count = 0;
    let vowels = ['a','e','i','o','u']
    for(let letter of str.toLowerCase()){
        if(vowels.includes(letter)){
            count++
        }
    }
    return console.log(count)
}

countVowel1(str)
