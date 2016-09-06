/**
 * Number of dividers of some number n.
 */

const primes = getPrimes(1e6);
const primeSet = new Set(primes);

function getPrimes(n) {
	var primes = [false, false];
	for(var i = 2; i < n; ++i) primes[i] = i;
	var max = Math.ceil(Math.pow(n, 0.5)) + 1;
	for (var i = 2; i < max; ++i) {
		if (!primes[i]) continue;
		for(var j = i * 2; j < primes.length; j += i) {
			primes[j] = false;
		}
	}

	return primes.filter(x => x);
}

var cache = {};
function factorization(n) {
	// if (cache[n]) return cache[n];
	if (primeSet.has(n)) return { [n]: 1 };
	var result = {};
	for(var i = 0; n !== 1 && i < primes.length; ++i) {
		if (n % primes[i] === 0) {
			if (cache[n]) {
				return mergeFactors(cache[n], result);
			}
			if (!result[primes[i]]) {
				result[primes[i]] = 1;
			} else {
				result[primes[i]]++;
			}
			n /= primes[i]; // In this place we can use cache.
			
			i--; // if prime divides twice.
		}
	}
	cache[n] = clone(result);
	return result;
}

function mergeFactors(a, b) {
	var result = {};
	[...Object.keys(a), ...Object.keys(b)].forEach(function(key) {
		if (a[key] && b[key]) result[key] = a[key] + b[key];
		if (a[key] && !b[key]) result[key] = a[key];
		if (!a[key] && b[key]) result[key] = b[key];
	});
	return result;
}

function clone(a) {
	var result = {};
	var keys = Object.keys(a);
	for(var i = 0; i < keys.length; ++i) {
		result[keys[i]] = a[keys[i]]; 
	}
	return result;
}

function countDivs(n) {
	var facts = factorization(n);
	return Object.keys(facts)
		.map(x => facts[x])
		.reduce(((x, y) => x * (y + 1)), 1);
}

function main() {
	var n = 1;
	var i = 1;
	var divs = 1; 
	while(countDivs(n) < 500) {
		i++;
		n+=i;
	}
	console.log(n);
}

main();