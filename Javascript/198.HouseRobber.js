/**
 * @param {number[]} nums
 * @return {number}
 */
// f(0) = a[0]
// f(1) = max(a[0], a[1])                         
// f(2) = max(a[0] + a[2], f(1))      =>    max(f(0) + a[2], f(1))    // 取f(0)，因為不能最相鄰的結果。即：max(f(0)的結果＋當前項, f(1)的結果)
//                           ^ 這裏是f(1)，不是a[1]，因為不能只比較a[1]，而是比較已經得出結果的f(1)，且f(1)已包含a[1]
// f(3) = max(f(1) + a[3], f(2))
// ...
// f(n) = max(f(n - 2) + a[n], f(n - 1))
var rob = function(nums) {
    if (!nums || !nums.length) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }
    nums[1]  = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        // 把每個結果放入數組
        nums[i] = Math.max(nums[i - 2] + nums[i], nums[i - 1]);
    }
    // 因為上面的for每次把結果放到數組最後，因此最後一項就是答案
    return nums[nums.length - 1];
};