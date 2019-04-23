/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // 迭代（隊列性質）
    // if (!root) {
    //     return [];
    // }
//     let nodeCount = 1;
//     const queue = [];
//     const newTree = [root];
//     while(newTree.length) {
//         let nextLevelTreeCount = 0;     // 下一層的樹的數目
//         const childTree = [];
        
//         // loop 當前層的有所樹
//         for (let i = 0; i < nodeCount; i++) {
//             const tempTree = newTree[0];
//             newTree.splice(0, 1);
//             childTree.push(tempTree.val);
//             if (tempTree.left) {
//                 newTree.push(tempTree.left);
//                 nextLevelTreeCount++;           // 如當前樹有左子樹，則下一層的樹的數目加1
//             }
//             if (tempTree.right) {
//                 newTree.push(tempTree.right);
//                 nextLevelTreeCount++;           // 。。。同上
//             }
//         }
//         nodeCount = nextLevelTreeCount;
//         queue.push(childTree);
//     }
//     return queue;
    
    // 递归
    if (!root) {
        return [];
    }
    // @override
    const levelOrderOverRide = function(root, depth, queue) {
        if (!root) {
            return;
        }
        if (!queue[depth]) {
            queue[depth] = [];
        }
        queue[depth].push(root.val);
        levelOrderOverRide(root.left, depth + 1, queue);
        levelOrderOverRide(root.right, depth + 1, queue);
    }
    const que = [];
    levelOrderOverRide(root, 0, que);
    return que;
};