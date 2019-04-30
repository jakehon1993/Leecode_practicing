/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// dp
// https://leetcode.com/problems/regular-expression-matching/discuss/5684/9-lines-16ms-c-dp-solutions-with-explanations
// don't understand...
var isMatch = function(s, p) {
    if (!s && !p) {
        return true;
    }
    if (!p) {
        return false;
    }
    const dp = [];
    dp[0] = [];
    dp[0][0] = true;
    for (let i = 0; i <= s.length; i++) {
        if (!dp[i]) {
            dp[i] = [];
        }
        for (let j = 1; j <= p.length; j++) {
            if (p[j - 1] === "*") {
                dp[i][j] = dp[i][j - 2] || 
                            (i && (s[i - 1] === p[j - 2] || p[j - 2] === ".") && 
                             dp[i - 1][j]);
            } else {
                dp[i][j] = i && (s[i - 1] === p[j - 1] || p[j - 1] === ".") && 
                            dp[i - 1][j - 1];
            }
            dp[i][j] = !!dp[i][j];
        }
    }
    return dp[s.length][p.length];
};