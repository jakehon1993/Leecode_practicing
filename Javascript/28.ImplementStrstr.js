/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle) {
        return 0;
    }
    
    // 1. 用match
    // const match = haystack.match(needle);
    // if (match) {
    //     return match["index"];
    // }
    // return -1;
    
    // 2.用indexOf
    // return haystack.indexOf(needle);
    
    // 3. loop
    let index = 0;
    while (index <= haystack.length - needle.length) {
        let hIndex = index;
        let nIndex = 0;
        while (nIndex < needle.length && haystack[hIndex] === needle[nIndex]) {
            hIndex++;
            nIndex++;
        }
        if (nIndex === needle.length) {
            return index;
        }
        index++;;
    }
    return -1;
    
};