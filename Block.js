class Block {

	constructor (data, hash, lastHash) {
		this.data = data;
		this.hash = hash;
		this.lastHash = lastHash;
	}

}

module.exports = Block;