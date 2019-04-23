/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices || prices === undefined) {
        return 0;
    }
    let sumProfit = 0;
    let startDay = 0;
    for (let nextDay = 1; nextDay<prices.length; nextDay++) {
        if (prices[nextDay] > prices[startDay]) {
            sumProfit += prices[nextDay] - prices[startDay];
        }
        startDay = nextDay;
    }
    return sumProfit;
};