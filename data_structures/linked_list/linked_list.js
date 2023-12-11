// Linked list 

// Nodes 
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

const node1 = new Node(10);
const node2 = new Node(20);
const node3 = new Node(30);
 

console.log(node1)
console.log(node2)

class LinkedList{
    constructor(){
        this.head =null;
    }
}

const linkedList = new LinkedList();
console.log(linkedList)

linkedList.head = node1;
node1.next =node2;
console.log(linkedList)
node2.next=node3;
console.log(linkedList)




