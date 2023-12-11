// Stack 

class Stack{
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        if(this.isEmpty()){
            return null;
        }
        return this.items.pop();
    }

    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.items[this.items.length - 1]
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items);
    }
}


const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();
console.log(stack.isEmpty())
console.log("peek",stack.peek())
console.log("size",stack.size())
stack.print()

