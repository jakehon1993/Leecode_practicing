/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // nums.sort();
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] === nums[i + 1]) {
    //         return true;
    //     }
    // }
    // return false;
    
    if (nums.length !== new Set(nums).size) {
        return true;
    }
    return false;
};