function modularPow(n, pow, mod) {
	if (pow === 0) return 1;
	if (pow === 1) return n;
	if (pow % 2 === 0) {
		var half = modularPow(n, pow / 2, mod) % mod;
		return half * half % mod;
	}
	return modularPow(n, pow - 1, mod) * n % mod;
}

function isPrime(p) {
	if (p < 2) return false;
	if (p === 2) return true;
	if (!isPrimeFerma(p)) return false;
	var max = Math.ceil(Math.pow(p, 0.5));
	for (var i = 2; i <= max; ++i) {
		if (p % i === 0) return false;
	}
	return true;
}

function isPrimeFerma(p) {
	return modularPow(2, p - 1, p) === 1;
}

function getAllCircles(number) {
	var str = number.toString();
	var array = [number.toString()];
	for (var i = 0; i < str.length - 1; ++i) {
		var cur = str.slice(1) + str[0];
		str = cur;
		array.push(cur);
	}
	// console.log(array)
	if (!array.every(x => str.length === x.length)) {
		return [0];
	}
	return array.map(x => +x);
}

function main() {
	var sum = 0;
	for(var i = 2; i < 1e6; ++i) {
		if (!isPrime(i)) continue;
		var isCircular = getAllCircles(i)
			// .slice(1)
			.every(x => isPrime(x));
		if (isCircular) sum++;
	}
	console.log(sum);
}
main();