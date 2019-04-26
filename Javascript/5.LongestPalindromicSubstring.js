/**
 * @param {string} s
 * @return {string}
 */

// 參巧題解解法3，如果知道一個subString是回文，則比較subString的(左 + 1)位及(右 + 1)位字符是否相等
// ex. string = "abcbs", subString = "bcb", 
// 比較 "a"(subString的左 + 1位) 及 "s"(subString的右 + 1位)
var longestPalindrome = function(s) {
    // 數組用來儲存由i至j位的subString是否回文，是則true
    // ex. s = "abcbs", subS = "bcb", 則dp[i][j] => dp[1][3] = true
    const dp = [];
    // 回文長度
    let maxlen = 0;
    // 回文起始位置
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        // 2-dimensional array
        if (!dp[i] || !dp[i].length) {
            dp.push([]);
        }
        for (let j = 0; j <= i; j++) {
            // 比較相隣字符和自己，因為i - j < 2 時，subString.length只有1或2，
            // subString.length = 1時，永遠是true
            // subString.length = 2時，檢查這2位字符是否相等
         //ex: str = "abcb", i = 3, j = 2 ==> 3 - 2 < 2, dp[i][j] = ("b" === "c") ?
         //ex: str = "abcb", i = 3, j = 3 ==> 3 - 3 < 2, dp[i][j] = ("b" === "b") ?
            if (i - j < 2) {
                dp[i][j] = s[i] === s[j];
            } else {
                // subString.length > 2時，
                // 1）檢查字符首尾相等，及
                // 2）檢查subString的左/右 + 1位相等
                dp[i][j] = (s[i] === s[j]) && (dp[i - 1][j + 1] === true);
            }
            
            // 當dp[i][j] = true，代表string由i至j位是回文，然後
            // 檢查該回文的長度是否比已知最長的回文的長度更長
            if (dp[i][j] && maxlen < i - j + 1) {
                maxlen = i - j + 1;
                start = j;
            }
        }
    }
    return s.substr(start, maxlen);
};