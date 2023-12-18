//  Simple Calculator 

function simpleCalculator(num1,operator,num2){
    switch(operator){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if(num2 !== 0){
                return num1 / num2;
            }else{
                return "Cannot divide by zero";
            }
        default:
            return "Invalid operator";
    }
}

console.log(simpleCalculator(5,"+",5))
console.log(simpleCalculator(5,"-",5))
