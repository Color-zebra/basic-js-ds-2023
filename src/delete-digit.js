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
  let strNumber = n + '';
  let currMax = +strNumber.slice(1)
  for (let i = 1; i < strNumber.length; i++) {
    const currNumber = +(strNumber.slice(0, i) + strNumber.slice(i + 1));
    currMax = Math.max(currMax, currNumber);
  }
  return currMax
}

module.exports = {
  deleteDigit
};
