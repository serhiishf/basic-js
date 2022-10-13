const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    let count = 0;
    const s1Arr = s1.split('');
    const s2Arr = s2.split('');
    s1Arr.forEach((item) => {
        if(s2Arr.indexOf(item) != -1) {
            let index = s2Arr.indexOf(item);
            count++;
            s2Arr.splice(index, 1)
        }
    })
    return count


  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
