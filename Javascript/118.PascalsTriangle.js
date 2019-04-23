/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (!numRows) {
        return [];
    }
    if (numRows === 1) {
        return [[1]];
    }
    const num = [
        [1],
        [1, 1]
    ];
    for (let i = 2; i < numRows; i++) {
        let newNum = [1];
        for (let j = 0; j < num[i - 1].length - 1; j ++) {
            newNum.push(num[i - 1][j] + num[i - 1][j + 1]);
        }
        newNum.push(1);
        num.push(newNum);
    }
    return num;
};