/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; --i) {
        if (digits[i] < 9) {
            ++digits[i];
            return digits;
        }
        digits[i] = 0;
    }
    // after looping, it means all digits have been round up, then needs to push "1" to digits(array) head
    digits.unshift("1");
    return digits;
};