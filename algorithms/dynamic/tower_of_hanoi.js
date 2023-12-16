// Tower of Hanoi 

function towerOfHanoi(n,sourceRod,auxiliaryRod,targetRod){
    if(n === 1){
        console.log(`Move disk from ${sourceRod} to ${targetRod}`)
        return;
    }

    towerOfHanoi(n-1,sourceRod,targetRod,auxiliaryRod);
    console.log(`Move disk ${n} from ${sourceRod} to ${auxiliaryRod}`)
    towerOfHanoi(n-1,auxiliaryRod,sourceRod,targetRod)
}


const numberOfDisks = 3;
const sourceRod = 'A'
const auxiliaryRod = 'B'
const targetRod = 'C'

const tower = towerOfHanoi(numberOfDisks,sourceRod,auxiliaryRod,targetRod);
console.log(tower)