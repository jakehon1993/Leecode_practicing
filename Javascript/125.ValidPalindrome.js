/**
 * @param {string} s
 * @return {boolean}
 */
var checkChar = function(char) {
    return /^[0-9a-zA-Z]$/i.test(char);
}

var isPalindrome = function(s) {
    let escape = 0;
    for (let i = 0; i < s.length / 2; i++) {
        if (!checkChar(s[i])) {
            continue;
        }
        if (!checkChar(s[s.length - 1 - escape])) {
            i--;
            escape++;
            continue;
        }
        if (s[i].toLowerCase() !== s[s.length - 1 - escape].toLowerCase()) {
            return false;
        }
        escape++;
    }
    return true;
};