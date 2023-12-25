// check if key exists in object 

const person = {
    id:1,
    name:'jack',
    age:20
}

const hasKey = 'name' in person;
if(hasKey){
    console.log("exists")
}else{
    console.log("not exists")
}


const hasKey1 = person.hasOwnProperty('age')
if(hasKey1){
    console.log("exists")
}else{
    console.log("not exists")
}