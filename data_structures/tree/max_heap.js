// Max Heap 

class MaxHeap{
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

            if(this.heap[currentIndex] > this.heap[currentIndex]){
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

            let largestClildIndex = currentIndex;

            if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[largestClildIndex]){
                largestClildIndex = leftChildIndex;
            }

             if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[largestClildIndex]){
                largestClildIndex = rightChildIndex;
            }

            if(currentIndex !== largestClildIndex){
                [this.heap[currentIndex], this.heap[largestClildIndex]] = [this.heap[largestClildIndex], this,this.heap[currentIndex]]
                currentIndex = largestClildIndex;
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


const maxHeap = new MaxHeap();
maxHeap.push(20);
maxHeap.push(10); 
maxHeap.push(15);
maxHeap.push(4);
maxHeap.push(30);
maxHeap.push(40);   

console.log("maxHeap",maxHeap.heap);
const popVal = maxHeap.pop();
console.log("pop",popVal)

console.log("peek",maxHeap.peek())
console.log("size",maxHeap.size())
console.log("isEmpty",maxHeap.isEmpty())
console.log("maxHeap",maxHeap.heap);
