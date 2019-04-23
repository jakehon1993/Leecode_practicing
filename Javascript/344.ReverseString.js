/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // 1. 一般調換
//     for (let i = 0; i < parseInt(s.length / 2, 10); i++) {
//         const word = s[i];
//         const targetIndex = (s.length - 1) - i;
//         s[i] = s[targetIndex];
//         s[targetIndex] = word;
        
//     }
    
    // 2. 直接用涵數
    // s.reverse();
    
    // 3. 異或方法
    // 異或定律
    //  A  B  A^B
    //  0  0   0
    //  0  1   1
    //  1  0   1
    //  1  1   0
    // 交換律： A^B = B^A, 將B^A用C表示, 即 A^B = C, A^C = B
    
    const arrayLength = s.length;
    
    // 只需操作數組長度的一半的次數，因為調換1次同時解決2個數
    for (let i = 0; i < arrayLength / 2; i ++) {
        // 異或需要操作2進制數, 所以先將string轉換為ASCII碼, 再轉換成2進制
        const first_hex = s[i].charCodeAt(0).toString(2);
        // 取要交換的目標string再作轉換
        const second_hex = s[arrayLength - 1 - i].charCodeAt(0).toString(2);
        // 進行異或
        const xor = first_hex ^ second_hex;
        
        // 利用交換律,交換位置
        // parseInt(x, 2) => 將x轉從2進制轉換為10進制ASCII, 再把ASCII碼轉換回char
        s[i] = String.fromCharCode(parseInt(first_hex ^ xor, 2));
        s[arrayLength - 1 - i] = String.fromCharCode(parseInt(second_hex ^ xor, 2));
    }
};