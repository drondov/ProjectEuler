function gcd(a, b) {
	if (b === 0) return a;
	return gcd(b, a % b);
}

function cancel(number) {
	var div = gcd(number[1], number[0]);
	var canceledA = number[0] / div;
	var canceledB = number[1] / div;
	return [canceledA, canceledB];
}

function equal(a, b) {
	var cA = cancel(a);
	var cB = cancel(b);
	return cA[0] === cB[0] && cA[1] === cB[1];
}

/**
 * is a / b cancelling fraction ?
 * @param  {Number} a Numerator 
 * @param  {Number} b Denumerator 
 * @return {Boolean}
 */
function check(a, b) {
	var digitsA = a.toString().split('').map(x => +x);
	var digitsB = b.toString().split('').map(x => +x);
	if (digitsA[0] === digitsB[0]) {
		if (equal([digitsA[1], digitsB[1]], [a, b])) return true;
	}
	if (digitsA[1] === digitsB[1]) {
		if (equal([digitsA[0], digitsB[0]], [a, b])) return true;
	}
	if (digitsA[1] === digitsB[0]) {
		if (equal([digitsA[0], digitsB[1]], [a, b])) return true;
	}
	if (digitsA[0] === digitsB[1]) {
		if (equal([digitsA[1], digitsB[0]], [a, b])) return true;
	}
	return false;
}

function isTrivial(a, b) {
	return a % 10 === 0 && b % 10 === 0;
}

function main() {
	var fractions = [];
	for(var i = 10; i < 100; ++i) {
		for(var j = 10; j < i; ++j) {
			if (!isTrivial(j, i) && check(j, i)) {
				fractions.push([j, i]);
			}
		}
	}
	return cancel(fractions.reduce((a, b) => {
		return [a[0] * b[0], a[1] * b[1]];	
	}));
}

function test() {
	if (!check(49, 98)) throw Error();
}

console.log(main());