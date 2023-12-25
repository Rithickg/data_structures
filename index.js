// looping through object 

const person = {
    name:'jack',
    age:20,
    hobbies:['running','gaming','singing'],
    work:'developer',
    experience:{
        google:"1yr developer",
        microsoft:"2yr senior developer",
    },
    games:[
        {GameOfWar : "not finished"},
        {AssasinsCreed:"finished"},
        {TombRaider:"finished"}
    ],
    values:[
        [1,2,3,4,5],
        ["rock","jack","jon"],
        [1,"one",2,"three"],
        "two",
        false,
        {id:1,name:"rock"}
    ],
    greet:function(){
        console.log('Hello everyone')
    }
}

console.log(person)
console.log(person.experience.google)