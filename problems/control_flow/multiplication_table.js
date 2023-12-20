// Multiplication table 

function multiplicationTable(num,range){
    for(let i=1; i<=range; i++){
        const result = i*num;
        console.log(`${num} * ${i} = ${result}`);
    }
}

multiplicationTable(5,10)