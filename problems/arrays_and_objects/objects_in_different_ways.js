// Different way of object 

// object literals 

const person = {
    name :'John',
    age:20,
    hobbies:['reading','swimming','games'],
    greet: function(){
        console.log('Hello Boy')
    },
    score:{
        maths:90,
        science:60
    }
}

console.log(typeof person)
console.log(person.name)
console.log(person.hobbies[1])
person.greet()
console.log(person.score.maths)

// using new object 

const person1 = new Object({
    name :'John',
    age:20,
    hobbies:['reading','swimming','games'],
    greet: function(){
        console.log('Hello Boy')
    },
    score:{
        maths:90,
        science:60
    }
})
console.log(typeof person1)
console.log(person1.name)
console.log(person1.hobbies[1])
person1.greet()
console.log(person1.score.maths)

// using constructor function 

function Person(){
    this.name = 'john',
    this.age = 30,
    this.hobbies = ['games','running'],
    this.greet = function(){
        console.log("we greet")
    },
    this.score = {
        maths:90,
        science:59
    }
}

const person2 = new Person();
console.log(person2)
console.log(typeof person2)
console.log(person2.name)
console.log(person2.hobbies[1])
person1.greet()
console.log(person2.score.maths)