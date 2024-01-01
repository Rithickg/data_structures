// generate range of numbers and characters 

// generator function 

function* iterate(a,b){
    for(let i=a; i<=b; i++){
        yield i
    }
}
let a ='a'
let v = a.charCodeAt()
let r = String.fromCharCode(v)
console.log(r)

console.log(a.charCodeAt())
function range(a,b){
    if(typeof a == 'string'){
        let result = [...iterate(a.charCodeAt(),b.charCodeAt())].map(n=>String.fromCharCode(n))
        console.log(result)
    }else{
        let result = [...iterate(a,b)]
        console.log(result)
    }
}

range(1,5)
range('A','G')
range('!','%')
range('a','r')