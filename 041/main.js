function isPrime(n) {
	var max = Math.ceil(Math.pow(n, 0.5));
	for(var i = 2; i <= max; ++i) {
		if (n % i === 0) return false;
	}
	return true;
}

function isPandigital(n) {
	var str = n.toString();
	if (str.length > 9) return false;
	for(var i = 1; i <= str.length; ++i) {
		if (!str.includes(i.toString())) {
			return false;
		}
	}
	return true;
}

function isPrimeFerma(p) {
	if (p === 2) return true;
	if (Math.pow(2, p - 1) % p === 1) {
		return true;
	}
	return false;
}

function main() {
	for(var i = 100000000; i > 10000; --i) {
		if (isPandigital(i) && isPrime(i)) {
			return;
			console.log(i);
		}
	}
}
main();