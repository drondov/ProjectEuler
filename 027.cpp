#include <iostream>
#include <map>
#include <math.h>

using namespace std;

typedef long long LL;

#define MAX_B 1000
#define MAX_A 1000

map<LL, LL> memo;

LL calc(int a, int b, int n) {
	return n * n + a * n + b;
}

bool isPrime(LL n) {
	if(n < 0) return false;
	if(memo[n]) return true;

	LL maxFrac = pow(n, 0.5);
	for(int i = 2; i <= maxFrac; ++i) {
		if(n % i == 0) return false;
	}
	memo[n] = 1;
	return true;
}


int countOfPrimes(int a, int b) {
	LL curValue = calc(a, b, 0);
	int count = 0;
	while(isPrime(curValue)) {
		count++;
		curValue = calc(a, b, count);
	}
	return count;
}

int main() {

	int maxCount = 0;
	int maxA = 0;
	int maxB = 0;
	for(int a = -MAX_A; a < MAX_A; ++a) {
		for(int b = -MAX_B; b < MAX_B; ++b) {
			int count = countOfPrimes(a, b);
			if(count > maxCount) {
				maxCount = count;
				maxA = a;
				maxB = b;
			}
		}
	}

	cout << "Max count of primes: " << maxCount << endl;
	cout << "A is " << maxA << endl;
	cout << "B is " << maxB << endl;
	cout << "A * B is " << maxA * maxB;

	return 0;
}

