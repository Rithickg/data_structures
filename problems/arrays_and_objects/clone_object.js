// Clone an Object 

const person = {
    name:'rock',
    age:20
}

const copy = person;
console.log(copy)
console.log(copy.name)


// using spread operator 

const copy1 = {...person}
copy1.hobbies = ['running','gaming']
console.log(copy1)
console.log(copy1.age)

// using assign 

const copy2 = Object.assign({},person)
copy2.work = 'developer'
console.log(copy2)


// using json parse 
const copy3 = JSON.parse(JSON.stringify(person))
copy3.name = 'jack'
console.log(copy3)