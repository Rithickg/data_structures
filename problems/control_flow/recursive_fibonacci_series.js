// Recursive Fibonicci series 

function fibonicciSeries(num){
    if(num<= 1){
        return num;
    }else{
        return fibonicciSeries(num-1) + fibonicciSeries(num-2);
    }
    
}

console.log(fibonicciSeries(10))