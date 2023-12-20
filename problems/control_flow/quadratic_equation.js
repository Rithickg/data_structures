// Quadratic Equaltion 

function quadraticEquation(a,b,c){
    let discriminant = b*b -4*a*c;

    if(discriminant >0){
        root1 = (-b + Math.sqrt(discriminant))/(2*a);
        root2 = (-b -Math.sqrt(discriminant))/(2*a);
        console.log(`root1 is ${root1} and root2 is ${root2}`)
    }else if(discriminant == 0){
        root1 = root2 = -b /(2*a);
        console.log(`root1 is ${root1} and root2 is ${root2}`)
    }else{
        let realPart = (-b/(2*a)).toFixed(2)
        let imagpart = (Math.sqrt(-discriminant)/(2*a)).toFixed(2);
        console.log(`The quadratic equation are ${realPart} + ${imagpart}i and ${realPart} - ${imagpart}i`)
    }
}

quadraticEquation(3,4,6)