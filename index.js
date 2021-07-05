const Block = require('./block');

const block1 = new Block({
	timestamp: 'Today',
	lastHash: 'dadada',
	hash: 'haaa',
	data: 'datas'
});

console.log(block1);