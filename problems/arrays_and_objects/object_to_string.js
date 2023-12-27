// convert object to strings 

const person ={
    name:"jack",
    age:40
}

const result = JSON.stringify(person)
const result1 = JSON.stringify(person).toString()

console.log(result)
console.log(typeof result1)


// convert using string 

const str = String(person)
const str1 = String(person["name"])
 
console.log(str)
console.log(str1)
console.log(typeof str)