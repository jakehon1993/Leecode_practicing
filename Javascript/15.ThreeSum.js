/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (!nums) {
        return [];
    }
    const result = [];
    nums.sort((left, right) => {
        return left - right;
    });
    for (let i = 0; i < nums.length; i++) {
        // ex: [-1, -1, 0, 1, 2]
        // L1: we push (-1, -1, 2) && (-1, 0, 1) into result
        // L2: we push (-1, 0, 1) into result, thats duplicate(wrong), so we skip this round,
        // but we dont skip at L1(we could check nums[i] === nums[i + 1]), it will lose (-1, -1, 2)
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const n = nums[i] + nums[left] + nums[right];
            if (n === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                
                // ex: [0, 0, 0, 0]
                // L1: we push (0, 0, 0) into result which index {i=0, left=1, right=3}
                // if we dont skip, then we continue to push (0, 0, 0) into result which index {i=0, left=2, right=3}, so we skip this round,
                // but we dont skip at L1 also(we could check nums[left] === nums[left - 1]), it will lose all (0, 0, 0)
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                left++;
            } else if (n < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
    
    
    // solution2: base on the twoSum
    // we can't use javascript to solve every test case provided by leetcode using the concept of twoSum, because the array set doesnt provide the collection function that other backend language does, we need to remove duplicate data by creating new function ourself, that cause extra time and lower performace, we can never pass all the test case, but below code it correct
//     if (!nums || nums.length < 3) {
//         return [];
//     }
//     nums.sort((left, right) => {
//         return left - right;
//     });
    
//     const removeDup = (arr1) => {
//         // arr1.forEach((val, index) => arr1[index] = JSON.stringify(val));
//         return [...new Set(arr1.map(val => JSON.stringify(val)))].map(val => JSON.parse(val));
//     }
    
//     const merge = (arr1, arr2) => {
//         arr2.forEach(val => arr1.push(val));
//     }
    
//     const twoSum = function(nums, target, left, right) {
//         // not sure if we need it
//         // if (right + 1 - left < 2) {
//         //     return [];
//         // }
//         const dict = {};
//         const result = [];
//         for (let i = left; i <= right; i++) {
//             const n = target - nums[i];
//             if (dict[n] !== undefined) {
//                 result.push([nums[left - 1], n, nums[i]]);
//             }
//             dict[nums[i]] = i;
//         }
//         return result;
//     }
    
//     let allResult = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) {
//             continue;
//         }
        
//         // 如當前值大放0，則往後的數無論如何，相加都不會等於0（因為數組已經過排序，負數不會出現在後面）
//         if (nums[i] > 0) {
//             continue;
//         }
//         const result = twoSum(nums, -nums[i], i + 1, nums.length - 1);
//         if (result.length) {
//             merge(allResult, result);
//         }
//     }
//     return removeDup(allResult, []);
};