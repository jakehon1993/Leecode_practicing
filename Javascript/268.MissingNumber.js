/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // 等差求和，(A1 + An) * n / 2
    // 即：(1 + 數組長度) * 數組長度 ／ 2
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    
    // 原來等差數列之和   -   缺少1位數的數列之和 ＝ 缺少的數
    // S - (S - oneNum) = oneNum
    return (1 + nums.length) * nums.length / 2 - sum;
};