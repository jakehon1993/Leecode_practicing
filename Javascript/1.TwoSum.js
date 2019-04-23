/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (nums.length < 2) {
        return [];
    }
    const dict = {};
    for (let i = 0; i < nums.length; i++) {
        const n = target - nums[i];
        if (dict[n] !== undefined) {
            return [dict[n], i];
        }
        dict[nums[i]] = i;
    }
    return [];

    // old version
    // let currIndex = 0;
    // while(currIndex < nums.length) {
    //     const diff = target - nums[currIndex];
    //     const targetIndex = nums.findIndex((value, index) => index !== currIndex && value === diff);
    //     if (targetIndex != -1) {
    //         return [currIndex, targetIndex];
    //     }
    //     currIndex++;
    // }
    // return;
};