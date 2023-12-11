// Tree 

class TreeNode{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(data){
        this.root = null;
    }
}

const tree = new BinaryTree()
tree.left = 50;
tree.right = 20;
console.log(tree)