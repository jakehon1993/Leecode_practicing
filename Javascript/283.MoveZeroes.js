/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let currIndex = nums.length - 1;
    let lastIndex = currIndex;
    while (currIndex >= 0) {
        if (nums[currIndex] === 0) {
            for (let i=0; i<lastIndex - currIndex; i++) {
                nums[currIndex + i] = nums[currIndex + i + 1];
            }
            nums[lastIndex] = 0;
            lastIndex--;
        }
        currIndex--;
    }
};