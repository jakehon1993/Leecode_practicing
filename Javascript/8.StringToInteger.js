/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const max = 2147483648 - 1;
    const min = -2147483648;
    const s = str.replace(/^\s+/, "");
    const match = s.match(/^[-?|\+?]?[0-9]+/i);
    if (match) {
        if (match[0] > max) {
            return max;
        }
        if (match[0] < min) {
            return min;
        }
        return match[0];
    }
    return 0;
    
};