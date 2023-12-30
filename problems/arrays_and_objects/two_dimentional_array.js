// creating two dimentional array 

function twoDimentionalArray(a,b){
    let arr = []

    // creating 
    for(let i=0; i<a; i++){
        for(let j=0; j<b; j++){
            arr[i] = [];
        }
    }

    // inserting 
    for(let i=0; i<a; i++){
        for(let j=0; j<b; j++){
            arr[i][j] = j;
        }
    }
    return arr
}

const a = 7;
const b = 5;

console.log(twoDimentionalArray(a,b))