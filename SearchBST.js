/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right);
}

var searchBST = function(root, val) {
    if (!root) return null;

    let result = null;
    let cNode = root;
    const iter = function(node) {
        if (!node) return;
        if (node.val === val) result = node;
        if (node.left) iter(node.left);
        if (node.right) iter(node.right);
    }
    iter(cNode);
    return result;
};

// TESTING
let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
searchBST(root, 2);