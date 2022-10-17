const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const set = new Set();
  const objData = {

  }
  const result = [];
  names.forEach(name => {
    if(set.has(name)){
      objData[name] += 1;
      result.push(name + `(` + objData[name] + ')');
    } else if(!set.has(name) && result.includes(name)){
      set.add(name);
      objData[name] = 1;
      result.push(name + `(` + objData[name] + ')');
    }
    else {
      set.add(name);
      objData[name] = 0;
      result.push(name);
    }
  })
  return result
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  renameFiles
};
