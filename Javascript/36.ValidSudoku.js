/**
 * @param {character[][]} board
 * @return {boolean}
 */
const initArray = (length) => {
    const arr = [];
    for(let i =0; i<length; i++) {
        arr[i] = [];
        for(let j = 0; j < length; j++) {
            arr[i].push(false);
        }
    }
    return arr;
}
// The question rule is simple as only using number to be validate, so flat-mark is the best solution.
var isValidSudoku = function(board) {
    const flat3x3 = initArray(9);
    const flatRow = initArray(9);
    const flatCol = initArray(9);
    
    // 1. We handle the flatRow first, (flatRow[rowIndex = 0][rowValue = 1] = true) meaning row 0 column 1 should be marke as used
    // for (let rowIndex = 0; rowIndex < 9 ; rowIndex++) {
    //     for (let colIndex = 0; colIndex < 9; colIndex++) {
    //         if (board[rowIndex][colIndex] !== ".") {
    //             const rowValue = board[rowIndex][colIndex] - 1;
    //             if (flatRow[rowIndex][rowValue]) {
    //                 return false;
    //             }
    //             flatRow[rowIndex][rowValue] = true;
    //         }
    //     }
    // }
    
    
    // // 2. Then the flatCol
    // for (let rowIndex = 0; rowIndex < 9 ; rowIndex++) {
    //     for (let colIndex = 0; colIndex < 9; colIndex++) {
    //         if (board[colIndex][rowIndex] !== ".") {
    //             const colValue = board[colIndex][rowIndex] - 1;
    //             if (flatCol[rowIndex][colValue]) {
    //                 return false;
    //             }
    //             flatCol[rowIndex][colValue] = true;
    //         }
    //     }
    // }
    
    
    // 3. If you look closely to the logic of flatRow and flatCol, flatRow is like the 90' left-rotated version of flatCol,
    // the logic marking column(flatCol), can be reuse at the flatRow,
    // (marking flatCol should be like marking the flatRow), so we combine the logic below
    // for (let rowIndex = 0; rowIndex < 9 ; rowIndex++) {
    //     for (let colIndex = 0; colIndex < 9; colIndex++) {
    //         if (board[colIndex][rowIndex] !== ".") {
    //             const value = board[colIndex][rowIndex] - 1;
    //             if (flatRow[rowIndex][value] || flatCol[colIndex][value]) {
    //                 return false;
    //             }
    //             flatRow[rowIndex][value] = true;
    //             flatCol[colIndex][value] = true;
    //         }
    //     }
    // }
    
    
    // 4. Now we handle the flat3x3[][]。首先flat3x3[][]依然是9x9[][],我們模擬其中存在9個3x3[]，所以要找出指定的3x3[]，再在該3x3[]的指定column標記
    for (let rowIndex = 0; rowIndex < 9 ; rowIndex++) {
        for (let colIndex = 0; colIndex < 9; colIndex++) {
            if (board[colIndex][rowIndex] !== ".") {
                const value = board[colIndex][rowIndex] - 1;
                // 如果用rowIndex代表第rowIndex行，則flat3x3[rowIndex = 0][column = 1]等如第0個3x3[]的第1列會標記
                // 因為目標是3x3[]，所以把rowIndex和colIndex分別除以3，向下捨入取整,
                // 通常情況下，parseInt([0 ~ 8] / 3, 10) 結果是0 ～ 2，
                // 其中把横代表行的rowIndex乘以3，再加上rowIndex，則取得目標行，
                // 直接在該行的value列標記 (flat3x3[index3x3][value] = true)
                const index3x3 = 3 * parseInt(rowIndex / 3, 10) + parseInt(colIndex / 3, 10);
                if (flatRow[rowIndex][value] || flatCol[colIndex][value] || flat3x3[index3x3][value]) {
                    return false;
                }
                flatRow[rowIndex][value] = true;
                flatCol[colIndex][value] = true;
                flat3x3[index3x3][value] = true;
            }
        }
    }
    return true;
};