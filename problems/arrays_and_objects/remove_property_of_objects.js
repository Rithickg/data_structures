// remove a property from an objects 

const student = {
    name:'jack',
    age:23,
    hobbies:['running','gym','games'],
    greet: function(){
        console.log("we greet")
    },
    score:{
        maths:40,
        science:56
    }
}

console.log(student)

delete student.age
delete student['greet']

console.log(student)