// Doubly Linked List 

class DoublyNode{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
    }

    insertAtBeginning(data){
        const newNode = new DoublyNode(data);
        if(!this.head){
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    insertAtEnd(data){
        const newNode = new DoublyNode(data)
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next!== null){
            current =current.next;
        }
        newNode.prev = current;
        current.next = newNode;
    }

    deleteFromBeginning(){
        if(this.head){
           this.head= this.head.next;
           if(this.head){
            this.head.prev = null;
           } 
        }
    }

    deleteFromEnd(){
        if(!this.head){
            return;
        }
        if(this.head.next == null){
            this.head =null;
            return;
        }
        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }
        current.prev.next = null;
    }

    print(){
        let current = this.head;
        while(current!==null){
            console.log(current.data);
            current =current.next;
        }
    }
}


const doublyLinkedList = new DoublyLinkedList()
doublyLinkedList.insertAtEnd(30)
doublyLinkedList.insertAtEnd(40)
doublyLinkedList.insertAtBeginning(20)
doublyLinkedList.insertAtBeginning(10)
doublyLinkedList.deleteFromEnd()
doublyLinkedList.deleteFromBeginning()
doublyLinkedList.print()