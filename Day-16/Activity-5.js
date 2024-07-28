class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function inOrderTraversal(node) {
  if (node !== null) {
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
  }
}

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);

inOrderTraversal(root);

function calculateDepth(node) {
  if (node === null) {
    return 0;
  }
  const leftDepth = calculateDepth(node.left);
  const rightDepth = calculateDepth(node.right);
  return Math.max(leftDepth, rightDepth) + 1;
}

const treeRoot = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);

console.log(calculateDepth(treeRoot));
