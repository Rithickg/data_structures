// String match using brute force 

function bruteForceStringMatch(text,pattern){
    const n = text.length;
    const m = pattern.length;

    for(let i = 0; i <= n-m; i++){
        let j;
        for(j=0; j<m; j++){
            if(text[i+j] !== pattern[j]){
                break;
            }
        }
        if(j == m){
            return i;
        }
    }
    return -1;
}

const text = "Hello, World! War This is new";
const pattern = "War"
const result = bruteForceStringMatch(text,pattern);

console.log(result)
console.log(text[result])