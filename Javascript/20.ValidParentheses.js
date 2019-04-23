/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 如非雙數長度，肯定不能完全配對
    if (s.length % 2) {
        return false;
    }
    const match = {
        "(": 1,
        ")": -1,
        "[": 2,
        "]": -2,
        "{": 3,
        "}": -3
    };
    const str = [];
    let count = 0;
    while(count < s.length) {
        if (match[s[count]] > 0) {
            str.push(s[count]);
        } else {
            const top = str[str.length - 1];
            if (match[top] !== Math.abs(match[s[count]])) {
                return false;
            }
            // 經檢查後，把該值pop()
            str.pop();
        }
        count++;
    }
    // 如果str還有值，代表這些值沒被檢查
    if (str.length) {
        return false;
    }
    return true;
};