const crypto = require('crypto');
function anotherInsecurePassword() {
  // GOOD: the random suffix is cryptographically secure
  var suffix = crypto.randomBytes(4).toString('hex');
  var password = "sssAAAA" + suffix;
  return password;
}