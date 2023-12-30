// sort array of objects by property value 

// we create custom sort for sorting using specific property here name 
function sortArrayObject(a,b){
    const name1 = a.name.toUpperCase()
    const name2 = b.name.toUpperCase()
    let comparison = 0;
    if(name1>name2){
        comparison = 1;
    }else if(name1<name2){
        comparison = -1;
    }
    return comparison
}

const students = [{name:'Sara',age:30},{name:'Dora',age:33},{name:'Nora',age:42}]
console.log(students.sort(sortArrayObject))
console.log(students.sort())

// sorting using age property 
function compareAge(a,b){
    return a.age - b.age;
}
console.log(students.sort(compareAge))