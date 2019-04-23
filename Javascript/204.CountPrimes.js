/**
 * @param {number} n
 * @return {number}
 */
// https://blog.csdn.net/NoMasp/article/details/50617645
var countPrimes = function(n) {
    if (!n || n < 2) {
        return 0;
    }
    let primes = [];
    for (let i = 2; i < n; i++) {
        if (primes[i] === undefined) {
            for (let j = i * 2; j < n; j = j + i) {
                primes[j] = false;
            }
        }
    }
    let count = 0;
    for (let i = 2; i < n; i++)
    {
        if (primes[i] === undefined) {
            count++;
        }
    };
    return count;
};