/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let count = 0;
    let left = 0;
    let right = 0;
    // 儲存出現過的字符
    const dict = {};
    while (left < s.length && right < s.length) {
        if (!dict[s[right]]) {
            // 第1次出現設true
            dict[s[right]] = true;
            
            // 取當前答案或該字串計算結果的較大者
            // 因為index由0開始，所以結果需要＋1
            count = Math.max(count, right + 1 - left);
            // 每次子串的檢查笵圍向左延申
            right++;
        } else {
            // 根據題意，該出現過的字符仍可能在目標最長子串的笵圍中，所以要設false
            dict[s[left]] = false;
            // 因為子串已存在重覆字符，下一個子串的檢查笵圍的起始位置需要加1
            left++;
        }
    }
    return count;
};