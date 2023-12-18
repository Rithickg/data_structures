// dynamic calculator 

function dynamicCalculator(...args){
    if(args.length < 3){
        return "Insufficient operands and operators";
    }

    let result = args[0];

    for(let i=1; i<args.length; i+=2){
        const operator = args[i];
        const operand = args[i + 1];

        switch(operator){
            case '+':
                result += operand;
                break;
            case '-':
                result -= operand;
                break;
            case '*':
                result *= operand;
                break;
            case '/':
                if(operand !== 0){
                    result /= operand;
                }else{
                    return "Cannot divide by zero"
                }
                break;
            default:
                return "Invalid operator";
        }
    }
    return result;
}

console.log(dynamicCalculator(10,'+',12,'/',2,'+',5))