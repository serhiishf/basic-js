const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  //const regex = /[[:alnum:]]+\./g;
  domains.forEach((elem) => {
    const tempArr = [];
    let str = ".";
    let domen = "";
    for (let i = 0; i < elem.length; i++) {
      if (i === elem.length - 1) {
        str += elem[i];
        tempArr.unshift(str);
        str = ".";
        break;
      }
      if (elem[i] != ".") {
        str += elem[i];
      } else if (elem[i] === ".") {
        tempArr.unshift(str);
        str = ".";
      }
    }
    tempArr.forEach((itemTempArr) => {
      domen += itemTempArr;
      if (result.hasOwnProperty(domen)) {
        result[`${domen}`]++;
      } else if (!result.hasOwnProperty(domen)) {
        result[`${domen}`] = 1;
      }
    });
  });
  return result;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats,
};
