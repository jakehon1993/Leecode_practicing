/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    const result = [];
    const tIndex = [];
    for (let currentIndex = 0; currentIndex < T.length; currentIndex++) {
        while (tIndex.length && T[currentIndex] > T[tIndex[0]]) {
            const firstIndex = tIndex[0];
            console.log(currentIndex, firstIndex)
            tIndex.pop();
            result[firstIndex] = currentIndex - firstIndex;
            // result.push(currentIndex - firstIndex);
        }
        tIndex.push(currentIndex);
    }
    return result;
};