/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const letters = [];
    for (let i = 0; i < s.length; i++) {
        const ascii = s[i].charCodeAt();
        if (letters[ascii] >= 1) {
            letters[ascii] = letters[ascii]+ 1;
        } else {
            letters[ascii] = 1;
        }   
    }
    
    for (let i = 0; i < s.length; i++) {
        const ascii = s[i].charCodeAt();
        if (letters[ascii] === 1) {
            return i;
        }
    }
    
    return -1;
};