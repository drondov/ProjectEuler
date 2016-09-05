var names = require('./names');

var triangles = [];
for(var i = 0; i < 1000; ++i) {
	triangles[i] = i  / 2 * (i + 1);
}

var count = names
	.map(name => name.toLowerCase())
	.map(name => {
		return name.split('')
			.map(x => x.charCodeAt(0) - 96)
			.reduce((x, y) => x + y);
	})
	.filter(n => triangles.includes(n))
	.length;

console.log(count);