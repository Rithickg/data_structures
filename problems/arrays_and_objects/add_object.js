// add value to object 

const person = {
    name:"ram",
    age:20
}

person.height = 5.7;
person["weight"] = 68
console.log(person)

delete person.age

console.log(person)