/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (!nums) {
        return null;
    }
    
    // 递归
    // @override
    const sortedArrayToBSTOverRide = function(nums, start, end) {
        if (start > end) {
           return null; 
        }
        let mid = Math.ceil(start + (end - start) / 2);   // round up
        const root = new TreeNode(nums[mid]);
        root.left = sortedArrayToBSTOverRide(nums, start, mid - 1);
        root.right = sortedArrayToBSTOverRide(nums, mid + 1, end);
        return root;
    }
    return sortedArrayToBSTOverRide(nums, 0, nums.length - 1);
};