/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const sMap = new Map();;
    for (let i = 0; i < s.length; i++) {
        const count = sMap.get(s[i]);
        if (count) {
            sMap.set(s[i], count + 1);
        } else {
            sMap.set(s[i], 1);
        }
    }
    const seq = [];
    sMap.forEach((value, key) => {
        let index = value;
        while(index > 0) {
            if (seq[value]) {
                seq[value] = seq[value] + key;
            } else {
                seq[value] = key;
            }
            --index;
        }
    });
    
    let resStr = "";
    for (let i = seq.length - 1; i > 0; i--) {
        if (seq[i] !== undefined) {
           resStr += seq[i]; 
        }
    }
    
    // 用Set
//     const resSet = new Set(seq);
//     resSet.delete(undefined);
    
//     // 因為 set 沒有 index，所以轉換成array
//     Array.from(resSet).forEach((val, index) => {
//         resStr = val + resStr;
//     });
    
    
    return resStr;
    
};