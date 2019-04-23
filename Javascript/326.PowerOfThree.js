/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    // 對數
    //           log n
    //  anslog  =  ------- ，當n＝9，即：3的anslog次方 ＝ 9，anslog = 2
    //           log 3
    const anslog = Math.log10(n) / Math.log10(3);
    
    // 如果anslog不是整數，如 anslog = 2.12345
    // 2.12345 - 2 = 0.12345
    // 不是整數代表不是正確的幂次方
    if (anslog - parseInt(anslog) === 0) {
        return true;
    }
    return false;
};