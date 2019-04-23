/**
 * @param {string[]} tokens
 * @return {number}
 */
// 输入: ["4", "13", "5", "/", "+"]
// 输出: 6
// 解释: (4 + (13 / 5)) = 6

// ["4","-2","/","2","-3","-","-"]
var evalRPN = function(tokens) {
    const constant = [];
    for (let i = 0; i < tokens.length; i++) {
        // let last = "";
        // let first = "";
        // console.log(constant, tokens[i])
        // switch (tokens[i]) {
        //     case "+":
        //     case "*":
        //     case "/":
        //         last = constant.pop();
        //         first = constant.pop();
        //         constant.push(eval(first + tokens[i] + last));
        //     case "-":
        //         last = constant.pop();
        //         first = constant.pop();
        //         constant.push(first - last);
        //     default:
        //         constant.push(tokens[i]);
        // }
        if (["+", "*", "/"].includes(tokens[i])) {
                const last = constant.pop();
                const first = constant.pop();
                constant.push(parseInt(eval(first + tokens[i] + last), 10));
        } else if (tokens[i] === "-") {
                const last = constant.pop();
                const first = constant.pop();
                constant.push(first - last);
        } else {
            constant.push(tokens[i]);
        }
    }
    // console.log(constant)
    return constant[0];
};