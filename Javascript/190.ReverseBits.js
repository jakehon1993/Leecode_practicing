/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let newNum = "";
    for (let i = 0; i < 32; i++) {
        let lastPos = n >> i & 1;
        newNum += lastPos.toString();
    }
    return parseInt(newNum, 2);
};