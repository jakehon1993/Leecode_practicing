/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanDig = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        // 提示：
        // 数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4
        // 如果当前数字是最后一个数字，或者之后的数字比它小的话，则加上当前数字。
        // 其他情况则减去这个数字。
        if (!s[i + 1] || romanDig[s[i + 1]] <= romanDig[s[i]]) {
            sum += romanDig[s[i]];
        } else {
            sum -= romanDig[s[i]];
        }
    }
    return sum;
};