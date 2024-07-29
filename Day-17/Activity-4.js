class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const leftNode = new TreeNode(1);
const rightNode = new TreeNode(3);
const root = new TreeNode(2, leftNode, rightNode);
console.log("Root :", root.data);
console.log("Left Node :", root.left.data);
console.log("Right Node :", root.right.data);

// Task 8 ::
class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new TreeNode(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  _insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  inOrderTraversal(node = this.root) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.data);
      this.inOrderTraversal(node.right);
    }
  }
}

const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

console.log("In-order traversal of the binary tree:");
tree.inOrderTraversal(); // Output: 2, 3, 4, 5, 6, 7, 8
