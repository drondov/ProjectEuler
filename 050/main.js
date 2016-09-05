// Very slow solution.
// node main.js  1103.71s user 15.17s system 92% cpu 20:04.59 total

/**
 * Return all primes below n.
 * Sieve of Eratosthenes
 */
function getPrimes(n) {
	var primes = [false, false];
	for(var i = 2; i < n; ++i) primes[i] = i;
	var fin = Math.ceil(Math.pow(n, 0.5));
	for(var i = 2; i < n; ++i) {
		if (primes[i] === false) continue;
		for(var j = i * 2; j <= fin; j += i) { 
			primes[j] = false;
		}
	}
	return primes.filter(x => x);
}

function main() {
	var max = 1e6;
	var primes = getPrimes(max);
	var longestPath = [];
	for (var i = 0; i < primes.length; ++i) {
		var path = [];
		var sum = 0;
		for(var j = i; j < primes.length; ++j) {
			sum += primes[j];
			if (sum > max) break;
			if (primes.includes(sum)) path = primes.slice(i, j + 1);
			if (longestPath.length < path.length) longestPath = path;
		}
	}
	console.log(longestPath.length, longestPath);
	console.log(longestPath.reduce((x, y) => x + y));
}

main();
