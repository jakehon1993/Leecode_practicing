// 動態規劃，指從題目中得出數學公式
// 觀察題目：
// 當n = 2時，level(2) = 2，有2 (level(1) + level(1)) 個解
// 當n = 3時，level(3) = 3，有3 (level(2) + level(1)) 個解
// 當n = 4時，level(4) = 5，有5 (level(3) + level(2)) 個解
// ...
// 當n = n時，level(n) 有 level(n - 1) + level(n - 2) 個解
// 結論：level(n) = level(n - 1) + level(n - 2)，即第3阶 ＝ 第2阶答案 ＋ 第1阶答案

// 轉化為code:
// 1）  先把a取出存入暫存單元temp           ，即            temp = a;
// 2）  level(2) = level(1) + level(1)   ，即            a = a + b;
// 3）    ^          ^          ^
// 4）  存入a       存入a       存入b
// 5）  再把temp存入b                     ，即            b = temp;

//   重覆 1）至5）
//   level(3) = level(2) + level(1)           
//            =   a      +   b
//     ^          ^
//   存入a       存入b
//   level(4) = level(3) + level(2)
//            =   a      +   b
//   ....

//   最後a就是答案


/**
 * @param {number} n
 * @return {number}
 */

// ex: n = 5，答案 = 8
var climbStairs = function(n) {
    if (!n) {
        return 0;
    }
    // 當n = 1時，永遠只有1步，可忽略，從n = 2開始
    // 當n = 2時，最初始情況是 1 ＋ 1 步
    // 根據結論，至少需要2個存儲單元用作計算
    let a = 1;
    let b = 1;
    
    // 跳過n = 1，所以 i 由 1 開始
    for (let i = 1; i < n ; i++) {
        //  額外單元存入上一個level的答案
        const temp = a;
        a += b;
        b = temp;
    }
    return a;
    
    // array形式
//     let step = [1, 1];
    
//     for (let i = 1; i < n ; i++) {
//         let temp = step[0];
//         step[0] += step[1];
//         step[1] = temp;
//     }
//     return step[0];
    
};