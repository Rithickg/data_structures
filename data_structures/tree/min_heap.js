// Min Heap 

class MinHeap{
    constructor(){
        this.heap = []
    }

    push(value){
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp(){
        let currentIndex = this.heap.length - 1;
        while(currentIndex > 0){
            const parentIndex = Math.floor((currentIndex -1) / 2);

            if(this.heap[currentIndex] < this.heap[currentIndex]){
                [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
                currentIndex = parentIndex;
            }else{
                break;
            }
        }
    }

    pop(){
        if(this.heap.length === 0){
            return null;
        }

        if(this.heap.length === 1){
            return this.heap.pop();
        }
        
        const poppedValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();

        return poppedValue;
    }

    heapifyDown(){
        let currentIndex =0;
        while(true){
            const leftChildIndex = 2 * currentIndex + 1;
            const  rightChildIndex = 2 * currentIndex + 2;

            let smallestClildIndex = currentIndex;

            if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestClildIndex]){
                smallestClildIndex = leftChildIndex;
            }

             if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestClildIndex]){
                smallestClildIndex = rightChildIndex;
            }

            if(currentIndex !== smallestClildIndex){
                [this.heap[currentIndex], this.heap[smallestClildIndex]] = [this.heap[smallestClildIndex], this,this.heap[currentIndex]]
                currentIndex = smallestClildIndex;
            }else{
                break;
            }
        }
    }

    peek(){
        return this.heap.length > 0 ? this.heap[0] :null;
    }

    size(){
        return this.heap.length;
    }

    isEmpty(){
        return this.heap.length === 0;
    }
}


const minHeap = new MinHeap();
minHeap.push(20);
minHeap.push(10);
minHeap.push(15);
minHeap.push(4);
minHeap.push(30);
minHeap.push(40);   

console.log("minHeap",minHeap.heap);
const popVal = minHeap.pop();
console.log("pop",popVal)

console.log("peek",minHeap.peek())
console.log("size",minHeap.size())
console.log("isEmpty",minHeap.isEmpty())
console.log("minHeap",minHeap.heap);
