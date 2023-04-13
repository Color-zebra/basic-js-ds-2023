const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') return str;

  let result = '';
  let counter = 0;
  let currLetter = str[0];

  for (let i = 1; i < str.length; i++) {
    if (str[i] === currLetter) {
      counter++;
    } else {
      result += (counter ? counter + 1 : '') + currLetter;
      currLetter = str[i];
      counter = 0;
    }
  }
  result += (counter ? counter + 1 : '') + currLetter;
  return result
}

module.exports = {
  encodeLine
};
