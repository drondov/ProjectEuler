#include <stdio.h>
#include <math.h>

typedef long long LL;

bool isPrime(LL n) {
	int maxPossibleFactor = pow(n, 0.5);
	for(int i = 2; i < maxPossibleFactor; ++i) {
		if(n % i == 0) return false;
	}
	return true;
}

LL maxFactor(LL p) {

	LL maxPossibleFactor = pow(p, 0.5);

	while(1 < maxPossibleFactor--) {
		if(p % maxPossibleFactor != 0) continue; 
		if(isPrime(maxPossibleFactor)) return maxPossibleFactor;
	}

	return 1;

}

int main() {

	LL p = 600851475143;
	int maxMul = maxFactor(p);
	printf("%d", maxMul);

	return 0;
}