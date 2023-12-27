// insert item in array 

function insertElement(){
    let array = [2,6,1,6,7,3]
    let index = 4;
    let element = 56;
    array.splice(index,0,element)
    console.log(array)
 }
 
 insertElement()
 
 
 
 function insertElement1(array,index,element){
     array.splice(index,0,element)
     console.log(array)
  }
 
 let array = [2,6,1,6,7,3]
 let index = 4;
 let element = 56;
 insertElement1(array,index,element)
 
 
 // Using loops 
 
 function insertElement2(array,index,element){
     for(let i=array.length; i>index; i--){
         array[i] = array[i-1];
     }
     array[index] = element;
     console.log(array)
 }
 
 
 insertElement1([23,62,15,66,72,32],3,56)