// Decimal to Binary conversion 

function binaryConversion(num){
    let binary = ""

    while(num > 0){
        let remainder = num % 2;
        binary = remainder + binary;
        num = Math.floor(num / 2);
    }

    if(binary === ""){
        binary ="0";
    }

    return binary;
}

console.log(binaryConversion(9))

function decimalToBinary(x){
    let bin = 0;
    let rem, i=1, step=1;
    while(x != 0){
        rem = x % 2;
        console.log(`step ${step++}: ${x}/2, remainder = ${rem}, quotient = ${parseInt(x/2)}`);
        x = parseInt(x/2);
        bin = bin + rem * i;
        i = i * 10;
    }
    console.log(`Binary: ${bin}`)
}

decimalToBinary(10)

// using string method 
function decimalToBinaryValue(x){
   const binary = x.toString(2);
   return binary
}

console.log(decimalToBinaryValue(11))