// Circular Linked List 

class CircularNode{
    constructor(data){
        this.data = data;
        this.next = null; 
    }
}

class CircularLinkedList{
    constructor(){
        this.head = null;
    }

    insertAtEnd(data){
        const newNode = new CircularNode(data);
        if(!this.head){
            this.head = newNode;
            this.head.next = this.head;
            return;
        }

        let current = this.head;
        while(current.next !== this.head){
            current = current.next;
        }
        newNode.next = this.head;
        current.next = newNode;
    }

    deleteFromBeginning(){
        if(this.head){
            let current = this.head;
            while(current.next !== this.head){
                current =current.next;
            }
            if(current === this.head){
                this.head = null;
                return;
            }else{
                current.next = this.head.next;
                this.head =this.head.next;
            }
        }
    }

    print(){
        let current =this.head;
        do{
            console.log(current.data);
            current = current.next;
        }while(current !== this.head); 
    }
}


const circularLinkedList = new CircularLinkedList();
circularLinkedList.insertAtEnd(10);
circularLinkedList.insertAtEnd(20);
circularLinkedList.insertAtEnd(30);
circularLinkedList.deleteFromBeginning();
circularLinkedList.print()