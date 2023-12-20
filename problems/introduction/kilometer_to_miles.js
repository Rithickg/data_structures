// Kilometers to miles 

function kilometerToMiles(Kilometers){
    const factor = 0.621371 
    const miles = Kilometers * factor
    return miles
}

console.log(kilometerToMiles(350))

function milesToKilometer(miles){
    const factor = 0.621371
    const kilometers = miles / factor;
    return kilometers
}

console.log(milesToKilometer(350))