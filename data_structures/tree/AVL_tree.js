class Node {
    constructor(data) {
      this.data = data;
      this.height = 1;
      this.left = null;
      this.right = null;
    }
  }
  
  class AVLTree {
    constructor() {
      this.root = null;
    }
  
    height(node) {
      return node ? node.height : 0;
    }
  
    balanceFactor(node) {
      return this.height(node.left) - this.height(node.right);
    }
  
    updateHeight(node) {
      node.height = Math.max(this.height(node.left), this.height(node.right)) + 1;
    }
  
    rotateRight(y) {
      const x = y.left;
      const T2 = x.right;
  
      x.right = y;
      y.left = T2;
  
      this.updateHeight(y);
      this.updateHeight(x);
  
      return x;
    }
  
    rotateLeft(x) {
      const y = x.right;
      const T2 = y.left;
  
      y.left = x;
      x.right = T2;
  
      this.updateHeight(x);
      this.updateHeight(y);
  
      return y;
    }
  
    insert(data) {
      this.root = this.insertNode(this.root, data);
    }
  
    insertNode(node, data) {
      if (!node) {
        return new Node(data);
      }
  
      if (data < node.data) {
        node.left = this.insertNode(node.left, data);
      } else if (data > node.data) {
        node.right = this.insertNode(node.right, data);
      } else {
        // Duplicate values are not allowed in AVL tree (you can modify this based on your requirements)
        return node;
      }
  
      this.updateHeight(node);
  
      const balance = this.balanceFactor(node);
  
      // Left Heavy
      if (balance > 1) {
        if (data < node.left.data) {
          return this.rotateRight(node);
        } else {
          node.left = this.rotateLeft(node.left);
          return this.rotateRight(node);
        }
      }
  
      // Right Heavy
      if (balance < -1) {
        if (data > node.right.data) {
          return this.rotateLeft(node);
        } else {
          node.right = this.rotateRight(node.right);
          return this.rotateLeft(node);
        }
      }
  
      return node;
    }
  
    delete(data) {
      this.root = this.deleteNode(this.root, data);
    }
  
    deleteNode(node, data) {
      if (!node) {
        return null;
      }
  
      if (data < node.data) {
        node.left = this.deleteNode(node.left, data);
      } else if (data > node.data) {
        node.right = this.deleteNode(node.right, data);
      } else {
        if (!node.left || !node.right) {
          node = node.left || node.right;
        } else {
          const minValueNode = this.findMinValueNode(node.right);
          node.data = minValueNode.data;
          node.right = this.deleteNode(node.right, minValueNode.data);
        }
      }
  
      if (!node) {
        return null;
      }
  
      this.updateHeight(node);
  
      const balance = this.balanceFactor(node);
  
      // Left Heavy
      if (balance > 1) {
        if (this.balanceFactor(node.left) >= 0) {
          return this.rotateRight(node);
        } else {
          node.left = this.rotateLeft(node.left);
          return this.rotateRight(node);
        }
      }
  
      // Right Heavy
      if (balance < -1) {
        if (this.balanceFactor(node.right) <= 0) {
          return this.rotateLeft(node);
        } else {
          node.right = this.rotateRight(node.right);
          return this.rotateLeft(node);
        }
      }
  
      return node;
    }
  
    findMinValueNode(node) {
      while (node.left) {
        node = node.left;
      }
      return node;
    }
  
    inorderTraversal(node, result = []) {
      if (node) {
        this.inorderTraversal(node.left, result);
        result.push(node.data);
        this.inorderTraversal(node.right, result);
      }
      return result;
    }
  }
  
  // Example usage:
  
  const avlTree = new AVLTree();
  console.log(avlTree)
  avlTree.insert(10);
  avlTree.insert(5);
  avlTree.insert(15);
  avlTree.insert(3);
  avlTree.insert(7);
  
  console.log('Inorder Traversal:', avlTree.inorderTraversal(avlTree.root));
  
  avlTree.delete(7);
  
  console.log('After Deletion Inorder Traversal:', avlTree.inorderTraversal(avlTree.root));
  