var crypto = require('crypto');

module.exports = function (password) {
  var hash = crypto.createHash('sha1');
  hash.update(password);
  return '{SHA}' + hash.digest('base64');
};