/**
 * UPPER BOUND
 * k - number of digits.
 * 10^k > k * 9^5
 * inequality is always true after and include 6.
 * Then upper bound is k < 6.
 */

const UPPER_BOUND = 1e6;

function check(number) {
	return number
		.toString()
		.split('')
		.map(x => +x)
		.reduce(((x, y) => x + Math.pow(y, 5)), 0) === number;
}

function main() {
	var sum = 0;
	for(var i = 2; i < UPPER_BOUND; ++i) {
		if (check(i)) {
			console.log(i);
			sum += i;
		}
	}
	console.log(' ---- ')
	return sum;
}

console.log(main());