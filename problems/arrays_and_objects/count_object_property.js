// count object properties 

const student = {
    name:'jack',
    age:30,
    hobbies:["running","swimming"]
}

const person ={
    gender:'male'
}

student.__proto__=person;

console.log(student)

let count =0;

for(let key in student){
    ++count
}
console.log(count)

const result = Object.keys(student).length
console.log(result)