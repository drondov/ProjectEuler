// Map vs Object for access.


const primesMap = new Set();
const primesObject = getPrimes(1e6).reduce((obj, x) => {
	obj[x] = x;
	primesMap.add(x);
	return obj;
}, {});
console.time('object');
for(var i = 0; i < 1e7; ++i) primesObject[i];
console.timeEnd('object');

console.time('object');
for(var i = 0; i < 1e7; ++i) primesMap.has(i);
console.timeEnd('object');

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