/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (!nums || nums === undefined) {
        return 0;
    }
    let prev = 0;
    for (let curr = 1; curr < nums.length; curr++) {
        if (nums[prev] !== nums[curr]) {
            nums[prev + 1] = nums[curr];
            prev ++;
        }
    }
    return prev + 1;
};