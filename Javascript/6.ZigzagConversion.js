/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// 從結果觀察，當正在處理的字符到達numRows行或0行時，行的方向會反轉
//   s   = "abcdefg"
//   res =  a   e
//          b d f
//          c   g
// ex. 當row = 0 || (3 - 1)時，反轉行的方向（向上或向下），即
//   row = 0 時，行向下走，row = (3 - 1)時，行向上走
//
//   1）s   = "abcdefg"，處理a時，row = 0，所以行數持續增加，一直處理至c時，row = 3 - 1，行數變成持續減少
//   2）每個字符放入對應行的區域中，如a,e放入行0， b,d,f放入行1， c,g放入行2
//   3）用result[] 儲存各行，result[0]代表行0，result[1]代表行1...
//      result =  ["ae", "bdf", "cg"]
//   4）result[] 拆為字符
var convert = function(s, numRows) {
    let ret = "";
    const result = [];
    let row = 0;
    
    // 反轉flag
    let goingDown = false;
    for (let i = 0; i < s.length; i++) {
        result[row] = result[row] ? result[row] + s[i] : s[i];
        if (row === 0 || row === numRows - 1) {
            goingDown = !goingDown;
        }
        if (goingDown) {
            row += 1;
        } else {
            row -= 1;
        }
    }
    for (let i = 0; i < result.length; i++) {
        ret += result[i];
    }
    return ret;
    
};