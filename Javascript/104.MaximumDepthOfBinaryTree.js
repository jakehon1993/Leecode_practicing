/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    while(!root) {
        return 0;
    }
    // 递归
    // 每次递归，且root有值(root !== null || root.val !== null)時，要把當前層算上，代表每次又再深了一層，所以要 +1
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};