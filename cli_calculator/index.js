"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var fisrtStr = (0, readline_sync_1.question)("Digite o primeiro numero:\n");
    var operator = (0, readline_sync_1.question)("Escolha o operador:\n");
    var secondStr = (0, readline_sync_1.question)("Digite o segundo numero:\n");
    var validInput = isNumber(fisrtStr) && isOperator(operator) && isNumber(secondStr);
    if (validInput) {
        var firstNum = parseInt(fisrtStr);
        var secondNum = parseInt(secondStr);
        var result = calculate(firstNum, operator, secondNum);
        console.log("A \"".concat(operator, "\" de ").concat(firstNum, " e ").concat(secondNum, " \u00E9: ").concat(result));
    }
    else {
        console.log("\ninvalid input\n");
        main();
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
main();
