/**
 * @param {number[]} nums
 * @return {number}
 */

// https://blog.csdn.net/zwzsdy/article/details/80029796
var maxSubArray = function(nums) {
    
    // 扫描法——O(N)   ........  深奥
    // let sum = nums[0];
    // let cur = nums[0];
    // for(let i = 1; i < nums.length ; i++) {
    //     if (cur < 0) {
    //         cur = nums[i];
    //     } else {
    //         cur += nums[i];
    //     }
    //     if (cur > sum) {
    //         sum = cur;
    //     }
    // }
    // return sum;
    
    // 动态规划法——O(N)
// 设sum[i]为以第i个元素结尾且和最大的连续子数组。假设对于元素i，所有以它前面的元素结尾的子数组的长度都已经求得，那么以第i个元素结尾且和最大的连续子数组实际上，要么是以第i-1个        元素结尾且和最大的连续子数组加上这个元素，要么是只包含第i个元素，即sum[i] = max(sum[i-1] + a[i], a[i])。可以通过判断sum[i-1] + a[i]是否大于a[i]来做选择，而这实际上        等价于判断sum[i-1]是否大于0。由于每次运算只需要前一次的结果，因此并不需要像普通的动态规划那样保留之前所有的计算结果，只需要保留上一次的即可，因此算法的时间和空间复杂度都很小
    
    let sum = nums[0];     // 因為for是由1開始，所以初始化至少由nums[0]開始
    let cur = nums[0];
    for(let i = 1; i < nums.length ; i++) {
        if (cur > 0) {
            cur += nums[i];
        } else {
            cur = nums[i];
        }
        if (sum < cur) {
            sum = cur;
        }
    }
    return sum;
};