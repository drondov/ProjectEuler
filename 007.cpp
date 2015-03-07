#include <iostream>
#include <math.h>

typedef unsigned long long ULL;

bool isPrime(ULL n) {
	ULL maxFrac = pow(n, 0.5); 
	for(int i = 2; i <= maxFrac; ++i) {
		if(n % i == 0) return false;
	}
	return true;
}

int main() {

	int i = 0;
	ULL n = 1;
	while(i < 10001) {
		n++;
		if(isPrime(n)) {
			// printf("%4d = %d\n", i, n);
			i++;
		}
	}

	std::cout << "10 001 prime number is : " <<  n;

}