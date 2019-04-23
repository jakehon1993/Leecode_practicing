/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (!nums1 || !nums2) {
        return null;
    }
    let lastIndex = m + n - 1;
    
    while(m > 0 && n > 0) {
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[lastIndex] = nums1[m - 1];
            m--;
        } else {
            nums1[lastIndex] = nums2[n - 1];
            n--;
        }
        lastIndex--;
    }
    
    while(!m && n > 0) {
        nums1[lastIndex] = nums2[n - 1];
        n--;
        lastIndex--;
    }
};