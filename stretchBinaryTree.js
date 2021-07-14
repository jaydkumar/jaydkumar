/*
Write a recursive algorithm that replaces each single binary tree node with multiple nodes with smaller values. Your algorithm is called with two parameters: a reference to a TreeNode pointer representing the root of a binary tree, and an integer "stretching factor" K. Your function should replace each node N with K nodes, each of which stores a data value that is 1/K of N's original value, using integer division.

The new clones of node N should extend from their parent in the same direction that N extends from its parent. For example, if N is its parent's left child, the stretched clones of N should also be their parent's left child, and vice versa if N was a right child. The root node is a special case because it has no parent; we will handle this by saying that its stretched clones should extend to the left.

Constraints: Do not modify the signature of the stretch interface

Signature: void stretch(root *TreeNode, stretchAmount int)

You must use recursion in your solution to visit each tree node

Diagram: https://i.imgur.com/UgvoVwF.png
*/


function Node (val, left, right) {
  this.val = val;
  if (left !== null) this.left = left;
  if (right !== null) this.right = right;
}

const stretch = function(root, k) {
  root.val = Math.floor(root.val / k);
  let cNode = root;
  let temp = root.left;
  for (let i = 1; i < k; i++) {
    cNode.left = new Node(cNode.val);
    cNode = cNode.left;
  }
  cNode.left = temp;
  
  const iter = function(node, dir) {
    if (!node) return;
    
    let tempLeft = node.left;
    let tempRight = node.right;
    node.val = Math.floor(node.val / k);
    for (let i = 1; i < k; i++) {
      if (dir === 'left') {
          node.left = new Node(node.val);
          node = node.left;
      } else {
          node.right = new Node(node.val);
          node = node.right;
      }
    }
    node.left = tempLeft;
    node.right = tempRight;
    
    iter(node.left, 'left');
    iter(node.right, 'right');
  }
  
  iter(root.left.left, 'left');
  iter(root.right, 'right');
}


// TESTING
let root = new Node(12);
root.left = new Node(81);
root.right = new Node(34);
root.left.right = new Node(56);
root.right.left = new Node(19);
root.right.right = new Node(6);

stretch(root, 2);
console.log(root.val); // 6
console.log(root.left.val) // 6
console.log(root.left.left.val) // 40
console.log(root.left.left.left.val) // 40
console.log(root.left.left.left.right.val) // 28
console.log(root.left.left.left.right.right.val) // 28
console.log(root.right.val) // 17
console.log(root.right.right.val) // 17
console.log(root.right.right.left.val) // 9
console.log(root.right.right.left.left.val) // 9
console.log(root.right.right.right.val) // 3
console.log(root.right.right.right.right.val) // 3

