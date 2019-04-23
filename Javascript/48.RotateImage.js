/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const matrixLength = matrix.length;
    
    // 1. 對角調換
    // [1, 2, 3]       [9, 6, 3]
    // [4, 5, 6]   =>  [8, 5, 2]
    // [7, 8, 9]       [7, 4, 1]
    for (let rowIndex = 0; rowIndex < matrixLength; rowIndex ++) {
        // 由於對角調換特性，只需要等長數組的三角形內的(一半)的數据，如下
        // [1, 2, 3]       [1, 2, 3]
        // [4, 5, 6]   =>  [4, 5]
        // [7, 8, 9]       [7]
        // 則colIndex要少於 數組長度 - 目前rowIndex
        for (let colIndex = 0; colIndex < matrixLength - rowIndex; colIndex ++) {
            const targetRowIndex = (matrixLength - 1) - colIndex;
            const targetColIndex = (matrixLength - 1) - rowIndex;
            const targetValue = matrix[targetRowIndex][targetColIndex];
            matrix[targetRowIndex][targetColIndex] = matrix[rowIndex][colIndex];
            matrix[rowIndex][colIndex] = targetValue;
        }
    }
    
    // 2. 每列折半調換（上下對調）
    // [9, 6, 3]       [7, 4, 1]
    // [8, 5, 6]   =>  [8, 5, 2]
    // [7, 4, 1]       [9, 6, 3]
    // rowIndex只需署理行長的一半
    for (let rowIndex = 0; rowIndex < parseInt(matrixLength / 2, 10); rowIndex ++) {
        for (let colIndex = 0; colIndex < matrixLength; colIndex ++) {
            const targetRowIndex = (matrixLength - 1) - rowIndex;
            const targetColIndex = colIndex;
            const targetValue = matrix[targetRowIndex][targetColIndex];
            matrix[targetRowIndex][targetColIndex] = matrix[rowIndex][colIndex];
            matrix[rowIndex][colIndex] = targetValue;
        }
    }
    
};