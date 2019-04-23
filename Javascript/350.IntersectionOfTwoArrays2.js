/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const dict = {};
    const result = [];
    nums1.forEach(val => {
        dict[val] = dict[val] ? ++dict[val] : 1;
    });
    
    nums2.forEach(val => {
        if (dict[val]) {
            result.push(val);
            dict[val] = --dict[val];
        }
    });
    return result;
    
    // 其他方法
    // const sortByNums = (prev, curr) => prev - curr;
    // nums1.sort(sortByNums);
    // nums2.sort(sortByNums);
    // let nums1Index = 0;
    // let nums2Index = 0;
    // let result = [];
    // while(nums1Index < nums1.length && nums2Index < nums2.length){
    //     if(nums1[nums1Index] == nums2[nums2Index]){
    //         result.push(nums1[nums1Index]);
    //         nums1Index++;
    //         nums2Index++;
    //      }else if(nums1[nums1Index] > nums2[nums2Index]){
    //         nums2Index++;
    //      }else{
    //         nums1Index++;
    //      }
    // }
    // return result;
};