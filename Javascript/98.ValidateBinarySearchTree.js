/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// 解釋.  3
//     /   \
//    1     5        => false。 *节点的右子树只包含大于当前节点的数，同時代表節點右邊的所有值都要大於當前節點的值（因為5，4，2都是3的右子樹），但是2少於3
//        /   \
//       4     7
//     /   
//    2

// http://www.cnblogs.com/grandyang/p/4298435.html

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    // 方法1，可以比較最大最小值
    // @override
//     const isValidBSTOverride = function(root, min, max) {
//         if (!root) {
//             return true;
//         }
//         // return 條件
//         // 右結點值小於最小值 ｜｜ 左結點值大於最大值
//         if (root.val <= min || root.val >= max) {
//             return false;
//         }
        
//         // 以例子中結點5的左分支為例：
//         // 當比較左分支樹時，概念上，因為左邊子結點的值不能大於root值，所以max調入root.val。
//         // 在右分支下的左分支值（如結點2）要同時比較 
//         // a）小於當前結點的母結點的值（值是4）  及，
//         // b）大於所有從root（值是3）至自己路徑上，該結點是被分支的右結點的母結點值（5是被分支的右結點，其母結點值是3）
//         // 過程如下：
//         // 1）5是右分支，右递归調入root.right = treeNode(5), min = 3, max = undefined
//         // 2）通過return 條件，再次递归，此時（餘下講解只考慮左递归），左递归調入root.left = treeNode(4), min = 3, max = 5，
//         //    min = 3 是上一次递归所給予的值，即b）提及的母結點的值
//         // 3）通過return 條件，再次递归，左递归調入root.left = treeNode(2), min = 3, max = 4
//         // 4）root.val(即2) <= min(即3)，為false，條件不通過 
//         return isValidBSTOverride(root.left, min, root.val) && isValidBSTOverride(root.right, root.val, max);
//         //             ^                                               ^
//         //           左递归                                           右递归
//         //    （左結點root.left，最小值min，當前結點值root.val） && （右結點root.right，當前結點值root.val，最大值max）
//     }
    
//     // 初始化，root = treeNode(3), min = max = undefined
//     return isValidBSTOverride(root);
    
    
    // 方法2，中序遍历
    // 根據題設，假如判断結果是true，則代表是一個有序數列，如果是false，則無序
    // ex:     2
    //       /   \
    //      1     6
    //          /   \          => true, 用中序遍历得出的結果是[1, 2, 4, 5, 6, 7]，是有序數列
    //         5     7
    //       /
    //     4
    
    // 因為調用了2次自身递归，代表要完整結束一次递归，需要return 2次
    // 即递归了多少次左分支，代表递归了一樣次數右分支，
    const calMiddleOrder = function (root, arrList) {
        if (!root) {
            return;
        }
        calMiddleOrder(root.left, arrList);
        // 在每次递归右分支前，先存入自身的值（上一次递归的root的值）
        arrList.push(root.val);
        calMiddleOrder(root.right, arrList);
    }
    // arr存放中序遍历的結果
    const arr = [];
    calMiddleOrder(root, arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= arr[i + 1]) {
            return false;
        }
    }
    return true;
};