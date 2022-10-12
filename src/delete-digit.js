const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let arr = [];
    let nString = n.toString();
    for(let i = 0; i < nString.length; i++){
        let temp = '';
        for(let j = 0; j < nString.length; j++){
            if(i != j){
                temp += nString[j];
            }
        }
        arr.push(Number(temp));
    }
    return Math.max(...arr)

  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
