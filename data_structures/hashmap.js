// Hashmap 

const myMap = new Map();

myMap.set("key1","value1");
myMap.set("key2","value2");
myMap.set("key3","value3")

const objkey = {name:"John"}
myMap.set(objkey,"value4");

console.log(myMap.get("key1"));

console.log(myMap.has("key1"));

console.log(myMap.size);

myMap.delete("key2");

for (const [key,value] of myMap){
    console.log(`${key} : ${value}`)
}


// Object as hashmap 

const myObject = {};

myObject["key1"] = "value1";
myObject["key2"] = "value2";

console.log(myObject["key1"])

Object.entries(myObject).forEach(([key,value])=>{
    console.log(`${key} : ${value}`)
})


const personMap = new Map();

const person1 = {id:1,name:"Alice"}
const person2 = {id:2,name:"Bob"}

personMap.set(person1,"Info of Alice");
personMap.set(person2,"Info of Bob");

console.log(personMap.get(person1))
console.log(personMap.get(person2))


// Example for hashmap counting words 

let array = [1,2,3,4,2,4,2,3,5,7,4,5];

let countMap = {};

array.forEach(element=>{
    if(countMap[element] === undefined){
        countMap[element] = 1;
    }
    else{
        countMap[element]++;
    }
});

console.log("countMap",countMap)

let string =""
for(let key in countMap){
    console.log(`Element ${key} occurs ${countMap[key]} times`);
   string = string + key + countMap[key]
}
console.log(string)

// Nested Arrays 

let array1 = [[1,2,3],[3,2,4],[5,7,1]];

let countMap1 ={}

array1.forEach((innerArray)=>{
    innerArray.forEach((element)=>{
        if(countMap1 === undefined){
            countMap1[element] = 1;
        }else{
            countMap1[element]++
        }
    })
})

let string1 = ""
for(let key in countMap){
    console.log(`Element ${key} occurs ${countMap[key]} times`)
    string =string + key + countMap[key]
}
console.log(string)

// string value ovvurance 

let string2 = "aabbbcccc";
let countMap2 = {}

let stringWords = string2.split("");
console.log(stringWords)
stringWords.forEach((element)=>{
    if(countMap2[element] === undefined){
        countMap2[element] = 1;
    }else{
        countMap2[element]++
    }
})

let outputString = ""
for(key in countMap2){
    console.log(`Element ${key} occurs ${countMap2[key]} times`)
    outputString =outputString + key + countMap2[key]
}

console.log(outputString)
console.log(countMap2)