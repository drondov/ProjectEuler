var results = new Set();
for(var i = 2; i < 2000; ++i) {
	for(var j = 2; j <= i; ++j) {
		var prod = i * j;
		var number = `${prod}${i}${j}`;
		if (isPandigit9(number)) results.add(prod);
	}
}
console.log([...results].reduce((x, y) => x + y));

function isPandigit9(_num) {
	var num = _num.toString();
	if (num.length !== 9) return false;
	for(var i = 1; i < 10; ++i) {
		if (!num.includes(i + '')) {
			return false;
		}
	}
	return true;
}