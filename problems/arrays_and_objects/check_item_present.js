// chech if specific item is present in array 

const array = [1,2,4,5,7,2,6,2,6]
const array1 = ['you','will','work']

const hasValue = array1.includes('work')

if(hasValue){
    console.log('present')
}else{
    console.log('not present')
}


const hasIndex = array.indexOf(5)

if(hasIndex){
    console.log('present')
}else{
    console.log('not present')
}