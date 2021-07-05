const cryptoHash = require('./crypto-hash.js');

describe('cryptoHash()', () => {

	it ('generates a SHA-256 hash', () => {
		expect(cryptoHash('foo')).toEqual('2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae');
	});

	it ('generates the same hash with the same parameters in different order', () => {
		expect(cryptoHash('foo', 'bar')).toEqual(cryptoHash('bar', 'foo'));
	});

});