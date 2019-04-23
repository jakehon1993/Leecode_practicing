/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // 32位有符号整数， [−2 ^ 31,  2 ^ 31 − 1]，31次方 ＝ 32位減1位地址位
    // 而當用補碼時，負數可以多取一位負數（-2 ^ 31 不作改變），而正數則因為溢出關係，需捨去最大（最後）的數(2 ^ 31 - 1)
    // *假給用原碼或反碼時則只能取[-2 ^ 31 - 1, 2 ^ 31 - 1]
    // *電腦只會儲存和運算補碼
    const max = 2147483648 - 1;
    const min = -2147483648;
    
    let answer = 0;
    while (x !== 0) {
        // 利用取余特性，任何數用10取余，都得小數點前最後一位數加上所有小數
        // 123 % 10 = 3
        // 123.4 % 10 = 3.4
        const last_number = x % 10;
        answer = answer * 10 + last_number;
        x = parseInt((x / 10), 10);
    }
    if (answer < min || answer > max) {
        return 0;
    }
    return answer;
};