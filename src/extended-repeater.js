const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let repeatTimes = options.repeatTimes || 1,
        separator = options.separator || '+',
        addition = options.addition,
        additionRepeatTimes = options.additionRepeatTimes || 1,
        additionSeparator = options.additionSeparator || '|',
        result = '',
        arr = [],
        additionArr = [];

    if (typeof (str) !== "string") {
        str = String(str);
    }

    if (typeof (addition) !== "string" && typeof (addition) !== "undefined") {

        addition = String(addition);
    }

    for (let i = 0; i < repeatTimes; i++) {
        arr[i] = str;
    }
    for (let j = 0; j < additionRepeatTimes; j++) {
        additionArr[j] = addition;
    }

    let add = additionArr.join(additionSeparator);
    result = arr.join(add + separator) + add;

    return result;

};