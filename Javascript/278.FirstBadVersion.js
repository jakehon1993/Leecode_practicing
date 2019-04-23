/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 0;
        let end = n - 1;
        while(n >= 0) {
            let middle = Math.ceil(start + (end - start) / 2);
            if (start > end) {
                return start;
            }
            if (!isBadVersion(middle)) {
                start = middle + 1;
            } else {
                end = middle - 1;
            }
        }
    };
};