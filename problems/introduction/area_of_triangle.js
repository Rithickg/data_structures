// Area of triangle 

function areaOfTriangle(baseValue,heightValue){
    const areaValue = (baseValue + heightValue) /2
    return areaValue
}

function triangle(side1,side2,side3){
    // semi perimeter
    const side = (side1 + side2 +side3) / 2
    // calculate area 
    const areaValue = Math.sqrt( side * (side - side1) * (side - side2) * (side - side3))
    return areaValue
}

console.log(triangle(3,4,5))