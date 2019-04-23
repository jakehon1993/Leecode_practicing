/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sDict = {};
    
    // 加入check，最後不用loop sDict
    let check = s.length;
    
    for(let i = 0; i < s.length; i++) {
        sDict[s[i]] = sDict[s[i]] ? ++sDict[s[i]] : 1;
    }
    
    for(let i = 0; i < t.length; i++) {
        if (sDict[t[i]]) {
            sDict[t[i]] = --sDict[t[i]];
            --check;
        } else {
            sDict[t[i]] = sDict[t[i]] ? ++sDict[t[i]] : 1;
            ++check;
        }
    }
    
     // 利用check
    if (check === 0) {
        return true;
    }
    return false;
    
    // 不用check
    // let bool = true;
    // Object.values(sDict).some(val => {
    //     if (val !== 0) {
    //         bool = false;
    //     }
    //     return !bool;
    // });
    // return bool;
    
   
    
    // 其他方法
//     if (s.length !== t.length) {
//         return false;
//     }
//     const letters = [];
//     for (let i = 0; i < s.length; i++) {
//         const Sascii = s[i].charCodeAt();
//         const Tascii = t[i].charCodeAt();
//         if (letters[Sascii] === undefined) {
//             letters[Sascii] = 0;
//         }
//         if (letters[Tascii]  === undefined) {
//             letters[Tascii] = 0;
//         }
//         if (letters[Sascii] !== undefined && letters[Tascii] !== undefined) {
//             letters[Sascii]++;
//             letters[Tascii]--;
//         }
//     }
    
//     for (let i = 0; i < letters.length; i++) {
//         if (letters[i] !== undefined && letters[i] !== 0) {
//             return false;
//         }
//     }
    
//     return true;
};