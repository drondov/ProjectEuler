const fs = require('fs');
const keylog = fs.readFileSync('./keylog.txt').toString().split('\n');

console.log(main());

function main() {
	outer: for(let i = 1000; i < 1e10; ++i) {
		for(let j = 0; j < keylog.length; ++j) {
			if (!test(i, keylog[j])) continue outer;
		}
		return i;
	}
}


function test(number, template) {
	var str = number.toString();
	var max = -1;
	for(let i = 0; i < template.length; ++i) {
		const cur = str.indexOf(template[i]);
		if (cur <= max) return false;
		max = cur;
	}
	return true;
}