/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 假設第1天是所有天數的最低價
    let minPrice = prices[0];
    // 最大利䦞
    let maxProfit = 0;
    
    // 由下一天（第2天）開始
    for (let i = 1; i < prices.length; i++) {
        // 如果當前最低價格 大於 下一天價格，代表當前最低價不是所有天數的最低價
        // 所以下一天的價成為當前最低價
        // 因為當前最低價格被重新計算，所以剩下的計算已無意義（當天的計算已不作準），所以跳到下一天
        if (minPrice > prices[i]) {
            minPrice = prices[i];
            continue;
        }
        // 如果當前最低價 小於 下一天價格，代表有利䦞存在，計算利䦞
        // 如果計算結果 ，如果
        // 1）大於 當前最大利䦞，代表當前最大利䦞不是所有天數的最大利䦞
        // 把計算結果存入當前最大利䦞中
        // 2）小於 當前最大利䦞，代表該利䦞結果不是所有天數的最大利䦞，不必存儲
        if (minPrice < prices[i] && prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    
    return maxProfit;
};