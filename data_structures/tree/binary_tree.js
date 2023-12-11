// Binary Tree 

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }

    insert(data){
        const newNode =  new Node(data);
        if(this.root === null){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode);
        }
    }

    insertNode(node,newNode){
        if(newNode.data < node.data){
            if(node.left === null){
                node.left = newNode;
            }else{
                this.insertNode(node.left,newNode)
            }
        }else{
            if(node.right === null){
                node.right = newNode;
            }else{
                this.insertNode(node.right,newNode)
            }
        }
    }

    inOrderTraversal(node,result=[]){
        if(node !== null){
            this.inOrderTraversal(node.left,result);
            result.push(node.data);
            this.inOrderTraversal(node.right,result);
        }
        return result;
    }

    delete(data){
        this.root = this.deleteNode(this.root,data);
    }

    deleteNode(node,key){
        if(node === null){
            return null;
        }

        if(key < node.data){
            node.left = this.deleteNode(node.left,key);
        }else if(key > node.data){
            node.right = this.deleteNode(node.right,key);
        }else{
            if(node.left === null && node.right === null){
                return null;
            }else if(node.left === null){
                return node.right;
            }else if(node.right === null){
                return node.left;
            }

            node.data = this.getMinValueNode(node.right).data;
            node.right = this.deleteNode(node.right,node.data)
        }
        return node;

    }

    getMinValueNode(node){
        while(node.left !== null){
            node= node.left;
        }
        return node;
    }

    getMinValue(){
        if(this.root === null){
            return null;
        }
        const minValueNode = this.getMinValueNode(this.root);
        return minValueNode.data;
    }  

    getMaxValueNode(node){
        while(node.right !== null){
            node = node.right;
        }
        return node;
    }

    getMaxValue(){
        if(this.root === null){
            return null;
        }
        const maxValueNode = this.getMaxValueNode(this.root)
        return maxValueNode.data;
    }

}

const binaryTree = new BinaryTree();
console.log(binaryTree)
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(25);
binaryTree.insert(3);
binaryTree.insert(7);


console.log("Original Inorder Traversal :",binaryTree.inOrderTraversal(binaryTree.root))

binaryTree.delete(5);

console.log("After Deletion Inorder Traversal:",binaryTree.inOrderTraversal(binaryTree.root))

const minValue = binaryTree.getMinValue();
console.log("minValue",minValue)


const maxValue = binaryTree.getMaxValue();
console.log("maxValue",maxValue)