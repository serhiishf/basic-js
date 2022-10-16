const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //значения по умолчанию - переобпределить из объекта
  let separator = "+";
  let additionSeparator = "|";
  let repeatTimes = 1;
  let addition = "";
  let additionRepeatTimes = 1;
  // итоговые значения
  let additPart = "";
  let result = "";
  //let str = isString(str2);
  //console.debug(str)
  //все значения проверять на строку, если не строка проверять на номер
  if (!!options.separator) {
    separator = options.separator;
  }
  if (!!options.additionSeparator) {
    additionSeparator = options.additionSeparator;
  }
  if (!!options.repeatTimes) {
    repeatTimes = options.repeatTimes;
  }
  if (!!options.addition) {
    //addition = options.addition;
    if (
      options.addition.toString() === `[object Object]` &&
      options.addition === str
    ) {
      addition = str;
    } else {
      addition = isString(options.addition);
      //console.debug(addition);
    }
  } else if (
    !!options.addition === false &&
    typeof options.addition === "boolean"
  ) {
    addition = isString(options.addition);
  } else if (!!options.addition === false && options.addition === null) {
    addition = "null";
  }
  if (!!options.additionRepeatTimes) {
    additionRepeatTimes = options.additionRepeatTimes;
  }
  //функция проверки на строку
  function isString(str) {
    if (typeof str === "string") {
      return str;
    } else if (str === null) {
      return "null";
    } /*  else if(str.toString === `[object Object]` && str.){
        console.debug('OBJEEEEEECTTT')
        return str.hint
    } */ else {
      return str.toString();
    }

    /* else if (typeof str === "number") {
      return str.toString();
    } else if (typeof str === "boolean") {
      return typeof str;
    } else if (str === null) {
      return "null";
    } else if (str === undefined) {
      return 'STRING_OR_DEFAULT';
    } else if(str){

    } */
  }
  //функция сборки addition
  function getAddition() {
    for (i = 0; i < additionRepeatTimes; i++) {
      if (i != additionRepeatTimes - 1) {
        additPart += addition + additionSeparator;
      } else {
        additPart += addition;
      }
    }
  }

  function getResult() {
    for (i = 0; i < repeatTimes; i++) {
      if (i != repeatTimes - 1) {
        result += str + additPart + separator;
      } else {
        result += str + additPart;
      }
    }
  }
  getAddition();
  getResult();

  return result;

  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater,
};
