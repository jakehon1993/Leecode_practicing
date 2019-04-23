/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let str = "1";
    // 減1是因為數組下標從0開始
    for (let i = 0; i < n - 1; i++) {
        let newStr = "";
        // 遂個字相鄰對比
        for (let j = 0; j < str.length; j++) {
            // 至少有1個（因為單獨的數字為1個）
            let count = 1;
            while (str[j + 1] && str[j] === str[j + 1]) {
                // 當相鄰數字相同時，
                // j自增1，加上loop的自增，跳過下一位數字（因為下一位數字跟當前的數字相同）
                j++;
                count++;
            }
            newStr += count.toString() + str[j];
        }
        str = newStr;
    }
    return str;
};