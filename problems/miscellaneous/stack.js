// stack 

class Stack {
    constructor(){
        this.items = [];
    }

    add(element){
        return this.items.push(element);
    }

    remove(element){
        if(this.items.length > 0){
            return this.items.pop()
        }
    }

    peek(){
        return this.items[this.items.length - 1];
    }

    isEmpty(){
        return this.items.length == 0;
    }

    size(){
        return this.items.length;
    }
    clear(){
        this.items = []
    }
}

let stack = new Stack()
stack.add(5)
stack.add(6)
stack.add(2)
stack.add(8)
stack.add(9)
console.log(stack.items)
console.log(stack.peek())


