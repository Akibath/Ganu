class Block {

	constructor (data, hash, lastHash) {
		this.data = data;
		this.hash = hash;
		this.lastHash = lastHash;
	}

}

const block1 = new Block('data', 'hash', 'lastHash');

console.log(block1);