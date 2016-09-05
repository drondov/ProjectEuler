function getPower(n) {
	var min = Math.ceil(Math.pow(n, 0.5));
	for(var i = 2; i <= min; ++i) {
		var pow = Math.log(n) / Math.log(i);
		if (Number.isInteger(pow)) {
			return [i, pow];
		}
	}
	return false;
}

/**
 * Change representation of pair to a to less and b to biggest.
 * For example 4^6 -> 2^12
 * @param  {Array} pair  [a, b], a^b
 * @return {Array}      [a, b]
 */
function toCanonical(pair) {
	var pow = getPower(pair[0]);
	if (pow) {
		pair[0] = pow[0];
		pair[1] = pow[1] * pair[1];
	}
	return pair;
}

function main() {
	var all = {};
	for(var i = 2; i <= 100; ++i) {
		for(var j = 2; j <= 100; ++j) {
			var pair = toCanonical([i, j]);
			all[`${pair[0]}^${pair[1]}`] = true;
		}
	}
	return Object.keys(all).length;
}

console.log(main());
