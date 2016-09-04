const fs = require('fs');
const keylog = fs.readFileSync('./keylog.txt').toString().split('\n');

console.log(main());

function main() {
	const appearances = [];
	for(let i = 0; i < keylog.length; ++i) {
		for(let j = 0; j < keylog[i].length; ++j) {
			if (!Array.isArray(appearances[keylog[i][j]])) {
				appearances[keylog[i][j]] = [];
			}
			appearances[keylog[i][j]].push(j);
		}
	}
	return appearances.map(app => {
		return app.reduce((x, y) => x + y, 0) / app.length;
	})
	.map((app, i) => ({[i]: app}))
	// .sort((x, y) {
	// 	return x.
	// });
}

// answer 73162890