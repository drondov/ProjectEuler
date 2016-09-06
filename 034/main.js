/**
 * UPPER BOUND
 * k - number of digits.
 * 9! * k < 10^k
 * Exponential function increase quickly than linear.
 * If k >= 7 then guaranteed that inequality always true.
 * So our upper bound is 6 digits.
 */

const UPPER_BOUND = 1e7;

var facts = [1];
for(var i = 1; i <= 9; ++i) {
	facts[i] = facts[i - 1] * i;
}

function check(n) {
	return n.toString()
		.split('')
		.map(x => facts[x])
		.reduce((x, y) => x + y) === n;
}

function main() {
	var sum = 0;
	for(var i = 3; i < UPPER_BOUND; ++i) {
		if (check(i)) sum += i;
	}
	return sum;
}

console.log(main());