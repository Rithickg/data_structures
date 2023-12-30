// check string is palindrome

function stringPalindrome(str){
    const len = str.length;
    for(let i=0; i<len/2; i++){
        if(str[i] !== str[len-1-i]){
            return console.log("Not palindrome")
        }
    }
        console.log("palindrome")
}

stringPalindrome("dada")

function stringPalindrome1(str){
    const clnStr = str.toLowerCase().replace(/[^a-z0-9]/g,'')
    const strVal = clnStr.split("");
    const strRev = strVal.reverse();
    const revStr = strRev.join("");

    if(str == revStr){
        console.log("palindrome")
    }else{
        console.log("Not palindrome")
    }
}

stringPalindrome1("dad")