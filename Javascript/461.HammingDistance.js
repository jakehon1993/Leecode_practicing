/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let count = 0;
    for (let i = 0; i < 31; i++) {
        let xLastPos = x >> i & 1;
        let yLastPos = y >> i & 1;
        if (xLastPos && !yLastPos || !xLastPos && yLastPos) {
            count++;
        }
    }
    return count;
};