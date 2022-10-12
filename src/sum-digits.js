const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(num/* n */) {
  let str = num.toString();
  let temp = 0;
  getSum(num)
  function getSum(n) {
    temp = 0;
    for (let i = 0; i < str.length; i++) {
      temp += Number(str[i]);
    }
    if (temp.toString().length > 1) {
      str = temp.toString();
      getSum(temp);
    }
  }


  return temp;


  console.log(num)

  //function numToString()


  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSumOfDigits
};
