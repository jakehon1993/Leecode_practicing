/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// ex: s = "aba"
//     t = "baa"
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const sMap = new Map();
    const tMap = new Map();
    for (let i = 0; i < s.length; i++) {
        
        //  L1: sVal = get("a") = undefined
        //  L2: sVal = get("b") = undefined
        //  L3: sVal = get("a") = "b"
        const sVal = sMap.get(s[i]);
        
        // L3: (sVal = "b") !== (t[i] = "a")    => return false
        if (sVal && sVal !== t[i]) {
            return false;
        }
        sMap.set(s[i], t[i]);
        tMap.set(t[i], s[i]);
    }
    
    // ex: s = "ab"
    //     t = "aa"
    // sMap = convToMap({a: a, b: a}) = {a: a, b: a}
    // tMap = convToMap({a: a, a: b}) = {a: b}
    if (sMap.size !== tMap.size) {
        return false;
    }
    
    return true;
};