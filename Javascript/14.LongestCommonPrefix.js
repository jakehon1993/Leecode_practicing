/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs || !strs.length) {
        return "";
    }
    let commonPrefix = "";
    for (let sIndex = 0; sIndex < strs[0].length; sIndex++) {
        const prefix = strs[0][sIndex];
        for (let aIndex = 1; aIndex < strs.length ; aIndex++) {
            if (prefix !== strs[aIndex][sIndex]) {
                return commonPrefix;
            }
        }
        commonPrefix += prefix;
    }
    return commonPrefix;
};