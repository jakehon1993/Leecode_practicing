/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if (k <= 0) {
        return;
    }
    const newArr = nums.reverse();
    const firstArray = newArr.splice(0, k > nums.length ? k - nums.length : k);
    firstArray.reverse();
    newArr.reverse();
    firstArray.concat(newArr).forEach((value ,index) => {
        nums[index] = value;
    })
};