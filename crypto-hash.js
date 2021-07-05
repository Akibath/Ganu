const crypto = require('crypto');

const cryptoHash = (...inputs) => {
	const hash = crypto.createHash('sha256');
	string = inputs.sort().join(' ');
	
	hash.update(string);
	return hash.digest('hex');
}

module.exports = cryptoHash;