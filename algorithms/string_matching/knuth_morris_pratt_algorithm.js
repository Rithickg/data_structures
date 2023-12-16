// Knuth Morris Pratt algorithm for string match 

function buildKMPTable(pattern){
    const m = pattern.length;
    const table = Array(m).fill(0);
    let j = 0;

    for(let i=1; i<m; i++){
        if(pattern[i] === pattern[j]){
            j++;
            table[i]=j;
        }else{
            if(j !== 0){
                j = table[j -1];
                i--;
            }else{
                table[i] =0;
            }
        }
    }
    return table;
}

function kmpStringMatch(text,pattern){
    const n = text.length;
    const m = pattern.length;

    const lps = buildKMPTable(pattern)
    let i =0
    let j =0

    while(i<n){
        if(text[i] === pattern[j]){
            i++;
            j++;
        }

        if(j === m){
            return i - j;
        }else if(i <n && text[i] !==pattern[j]){
            if(j !== 0){
                j =lps[j - 1]
            }else{
                i++
            }
        }
    }
}


const text = "Hello, World! War This is new";
const pattern = "War"
const result =kmpStringMatch(text,pattern)
console.log(result)
console.log(text[result])