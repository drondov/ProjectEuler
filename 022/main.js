var names = require('./names').sort().map(x => x.toLowerCase());
// console.log(names)

function alphaValue(str) {
	var value = 0;
	for(var i = 0; i < str.length; ++i) {
		value += str.charCodeAt(i) - 96; // 96 is previos of 'a' char code.
	}
	return value;
}

function main() {
	var sum = 0;
	for(var i = 0; i < names.length; ++i) {
		var score = alphaValue(names[i]) * (i + 1);
		sum += score;
	}
	return sum;
}
console.log(main());