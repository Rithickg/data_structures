class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(element){
        this.items.push(element);
    }

    dequeue(){
        if(this.isEmpty()){
            return null;
        }
        return this.items.shift();
    }

    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.items[0];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items)
    }
}


const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20); 
queue.enqueue(30);
queue.dequeue();
console.log(queue.isEmpty());
console.log("peek",queue.peek());
console.log("size",queue.size());
queue.print()