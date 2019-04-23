/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if (n === 1) {
        return true;
    }
    // let check = new Set();
    // n = n.toString();
    // while(n.length) {
    //     if (n.length === 1 && n === "1") {
    //         return true;
    //     }
    //     let sum = 0;
    //     for (let i = 0; i < n.length; i++) {
    //         sum += n[i] * n[i];
    //     }
    //     if (check.has(sum)) {
    //         return false;
    //     } else {
    //         check.add(sum);
    //     }
    //     n = sum.toString();
    // }
    // return false;
    
    // 純數字類型
    const check = new Set();
    while(n !== 1) {
        let sum = 0;
        while(n) {
            sum += (n % 10) * (n % 10);
            n = (n - n % 10) / 10;
        }
        if (check.has(sum)) {
            return false;
        } else {
            check.add(sum);
        }
        n = sum;
    }
    return true;
};