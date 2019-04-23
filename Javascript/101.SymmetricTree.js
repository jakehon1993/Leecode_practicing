/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

//ex       1                      a
//       /   \                  /   \
//      2     2         =>     b     c       镜像位置= [b, c]
//    /  \   /  \            /  \   /  \
//   3    4 4    3          d    e f    g    镜像位置= [d, g], [e, f]
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // 递归
    // if (!root) {
    //     return true;
    // }
    // // @override
    // const isSymmetricOverride = function(left, right) {
    //     if (!left && !right) {
    //         return true;
    //     }
    //     // 如果是镜像对称，則左右樹不會只缺失一邊，而且值是一樣
    //     if (!left || !right || left.val !== right.val) {
    //         return false;
    //     }
    //     // 調入左樹及左樹的镜像位置 && 調入右樹及右樹的镜像位置
    //     return isSymmetricOverride(left.left, right.right) && isSymmetricOverride(left.right, right.left);
    //     //                             ^           ^                                  ^            ^
    //     //                             d           g                                  e            f
    // }
    // return isSymmetricOverride(root.left, root.right);
    
    // 迭代
    if (!root) {
        return true;
    }
    const stack = [];
    let mirrorLeft = root.left;
    let mirrorRight = root.right;
    stack.push(mirrorLeft);
    stack.push(mirrorRight);
    while(stack.length) {
        // 每次取頭2位旅入left和right，頭2位是子樹和其鏡像位置
        mirrorLeft = stack[0];
        stack.splice(0, 1);       //取完要拿走
        mirrorRight = stack[0];
        stack.splice(0, 1);
        
        if (!mirrorLeft && !mirrorRight) {
            // 指當前子樹已經檢查完，跳去下一個子樹
            continue;
        }
        if (!mirrorLeft || !mirrorRight || mirrorLeft.val !== mirrorRight.val) {
            return false;
        }
        // 壓入左樹和左樹的鏡像位置
        stack.push(mirrorLeft.left);
        stack.push(mirrorRight.right);
        
        // 壓入右樹和右樹的鏡像位置
        stack.push(mirrorLeft.right);
        stack.push(mirrorRight.left);
    }
    return true;
};