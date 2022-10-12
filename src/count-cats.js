const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats( matrix ) {
    const arr = matrix;
    count = 0;
    getCats(arr)
    function getCats(arr){
        arr.forEach(element => {
            if(Array.isArray(element)){
                getCats(element);
            }
            if(element === '^^'){
                count++;
            }
        });
    }
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  //console.dir(arr);
  return count;
}

module.exports = {
  countCats
};
