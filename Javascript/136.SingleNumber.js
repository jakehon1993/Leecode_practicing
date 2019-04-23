/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort();
    for (let i = 0; i < nums.length; i++) {
        if (nums[0] !== nums[1]) {
            return nums[0];
        }
        if (i + 1 >= nums.length) {
            return nums[nums.length - 1];
        }
        if (nums[i] === nums[i + 1]) {
            i++;
            continue;
        }
        return nums[i];
    }
};