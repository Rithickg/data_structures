// Binary Search Tree 

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(data){
        const newNode = new Node(data);
        if(this.root === null){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode);
        }
    }

    insertNode(node,newNode){
        if(newNode < node.data){
            if(node.left === null){
                node.left = newNode;
            }else{
                this.insertNode(node.left,newNode);
            }
        }else{
            if(node.right === null){
                node.right = newNode;
            }else{
                this.insertNode(node.right,newNode);
            }
        }
    }

    search(data){
        return this.searchNode(this.root,data);
    }

    searchNode(node,data){
        if(node === null || node.data === data){
            return node;
        }
        if(data < node.data){
            return this.searchNode(node.left,data);
        }else{
            return this.searchNode(node.right,data);
        }
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
            node.right = this.deleteNode(node.right,node.data);
        }
        return node;
    }

    getMinValueNode(node){
        while(node.left !== null){
            node = node.left;
        }
        return node;
    }

    getMaxValueNode(node){
        while(node.right !== null){
            node = node.right;
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

    getMaxValue(){
        if(this.root === null){
            return null;
        }

        const maxValueNode = this.getMaxValueNode(this.root);
        return maxValueNode.data;
    }

    inorderTraversal(node,result = []){
        if(node !==null){
            this.inorderTraversal(node.left,result);
            result.push(node.data);
            this.inorderTraversal(node.right,result);
        }
        return result;
    }
}

const bst = new BinarySearchTree();
console.log(bst);
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log('Inorder Traversal:',bst.inorderTraversal(bst.root));

const searchData = 15;
const searchResult = bst.search(searchData);
console.log(`search for ${searchData}:`,searchResult)

bst.delete(3);
console.log("After delete:",bst.inorderTraversal(bst.root));

const minValue = bst.getMinValue();
console.log("minValue",minValue)

const maxValue = bst.getMaxValue();
console.log("maxValue",maxValue)