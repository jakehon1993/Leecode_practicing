/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const str = [];
    for (let i = 0; i < n; i++) {
        let value = i + 1;
        let f = value % 3;
        let b = value % 5;
        
        if (f === 0 && b === 0) {
            value = "FizzBuzz";
        } else if (f === 0) {
            value = "Fizz";
        } else if (b === 0) {
            value = "Buzz";
        }
        str.push(value.toString());
    }
    return str;
};