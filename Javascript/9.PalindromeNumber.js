/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = x.toString();
    let lastIndex = str.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[lastIndex]) {
            return false;
        }
        lastIndex--;
    }
    return true;
};