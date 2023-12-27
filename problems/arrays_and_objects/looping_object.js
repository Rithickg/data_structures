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
    greet:function(){
        console.log('Hello everyone')
    }
}

const value =  {
    values:[
    [1,2,3,4,5],
    ["rock","jack","jon"],
    [1,"one",2,"three"],
    "two",
    false,
    {id:1,name:"rock"}
]
}

// inheriting the properties 
person.__proto__ = value;

console.log(person)
console.log(person.experience.google)

for(let key in person){
    let value;
    value = person[key];
    console.log(key + "-" + value)
    
}

// using Object.entries 

for(let [key,value] of Object.entries(person)){
    console.log(key +"-"+ value)
}

