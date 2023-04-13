const { NotImplementedError } = require('../extensions/index.js');

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
  let result = {};
  let curr = domains
    .map(domain => domain
                    .split('.')
                    .reverse()
                    .map(item => '.' + item))
    .sort((a, b) => b.length - a.length);

  for (let i = 0; i < curr.length; i++) {
    let currDNS = '';
    
    for (let j = 0; j < curr[i].length; j++) {
      currDNS += curr[i][j];
      result[currDNS] ? result[currDNS]++ : result[currDNS] = 1;
    }
  }
  return result
}

module.exports = {
  getDNSStats
};
