function getCycleLength(p, q) {
	var i = 0;
	var digits = [];	

	while (true) {
		var int = Math.floor(p * 10 / q);
		p = p * 10 % q;
		if (p === 0) return 0;
		var digit = check(p);
		if (digit) return i - digit[1]; 
		digits.push([p, i]);
		// console.log(digits);
		i++;
	}

	function check(p) {
		for(var i = 0; i < digits.length; ++i) {
			if (digits[i][0] === p) return digits[i];
		}
		return false;
	}
}

// function test() {
// 	getCycleLength(1, )
// }

function main() {
	var max = 0;
	var maxd = 2;
	for(var d = 2; d < 1000; ++d) {
		var len = getCycleLength(1, d);
		if (max < len) {
			max = len;
			maxd = d;
		}
	}
	return maxd;
}
console.log(main());