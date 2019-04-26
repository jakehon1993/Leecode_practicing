/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let index1 = 0;
    let index2 = 0;
    const mergedArray = [];
    while (index1 < nums1.length || index2 < nums2.length) {
        // old version
        // if (nums1[index1] >= nums2[index2]) {
        //     mergedArray.push(nums2[index2++]);
        // } else if (!nums1[index1]) {
        //     mergedArray.push(nums2[index2++]);
        // } else if (!nums2[index2]) {
        //     mergedArray.push(nums1[index1++]);
        // } else {
        //     mergedArray.push(nums1[index1++]);
        // }
        
        if (nums1[index1] >= nums2[index2] || !nums1[index1]) {
            mergedArray.push(nums2[index2++]);
        } else {
            mergedArray.push(nums1[index1++]);
        }
    }
    if (mergedArray.length % 2 === 0) {
        const middleIndex = mergedArray.length / 2;
        return (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
    } 
    return mergedArray[parseInt(mergedArray.length / 2, 10)];
};