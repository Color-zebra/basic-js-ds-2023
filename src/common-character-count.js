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
  let first = s1;
  let second = s2;
  let counter = 0;

  const deleteSymbol = (str, index) => {
    let newStr = str.slice(0, index) + str.slice(index+1);
    return newStr
  }

  for (let i = 0; i < first.length; i++) {
    let index = second.indexOf(first[i]);
    if (index !== -1) {
      counter++;
      second = deleteSymbol(second, index);
    }
  }

  return counter;
}

module.exports = {
  getCommonCharacterCount
};
