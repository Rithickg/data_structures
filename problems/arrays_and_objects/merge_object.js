// Merge property of objects 

const person = {
    name:'jack',
    age:30
}

const student = {
    gender :'male'
}

const newObj = Object.assign(person,student);
const newObj1 = {...person,...student}
console.log(newObj)
console.log(newObj1)