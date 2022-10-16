const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    throw new NotImplementedError('Not implemented');
    
    if (Array.isArray(array)) {
      return 1 + Math.max(0, ...array.map(calculateDepth));
    } else {
      return 0;
    }
    /*         function recurs(array) { 
          if (Array.isArray(array)) { 
            return 1 + Math.max(0, ...array.map(recurs)) 
          } else { 
            return 0 
          } 
        
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  } */
    return recurs(arr);
  }
}

module.exports = {
  DepthCalculator,
};
