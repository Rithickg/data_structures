// Singly Linked List 

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

const node1 = new Node(10)
const node2 = new Node()
console.log(node1)
console.log(node2)

class SinglyLinkedList{
    constructor(){
        this.head =null;
    }

    insertAtBeginning(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAtEnd(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next!==null){
            current =current.next;
        }
        current.next = newNode;
    }

    deleteFromBeginning(){
        if(this.head){
            this.head = this.head.next;
        }
    }

    deleteFromEnd(){
        if(!this.head){
            return;
        }
        if(this.head.next === null){
            this.head = null;
            return;
        }
        let current = this.head;
        let previous = null;
        while(current.next !== null){
            previous = current;
            current = current.next;
        }
        previous.next = null;
    }

    print(){
        let current = this.head;
        while(current!==null){
            console.log(current.data);
            current = current.next;
        }
    }
}

const singlyLinkedList = new SinglyLinkedList()
console.log(singlyLinkedList)
singlyLinkedList.insertAtEnd(10);
singlyLinkedList.insertAtEnd(20);
singlyLinkedList.insertAtBeginning(40)
singlyLinkedList.insertAtBeginning(5)
singlyLinkedList.deleteFromBeginning()
singlyLinkedList.print()