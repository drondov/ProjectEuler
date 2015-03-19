#include <iostream>
#include <math.h>

using namespace std;

#define D 3330

typedef unsigned long long ULL;

bool isPrime(ULL a) {
	ULL maxFrac = pow(a, 0.5);

	for(ULL i = 2; i <= maxFrac; ++i) {
		if(a % i == 0) return false;
	} 

	return true;
}

bool isAnnogram(ULL a, ULL b) {
	int numbersA[10];
	int numbersB[10];
	for(int i = 0; i < 10; ++i) {
		numbersA[i] = 0;
		numbersB[i] = 0;
	}

	while(a > 0) {
		numbersA[a % 10]++;
		a /= 10;
	}

	while(b > 0) {
		numbersB[b % 10]++;
		b /= 10;
	}

	for(int i = 0; i < 10; ++i) {
		if(numbersA[i] != numbersB[i]) return false;
	}

	return true;
}

bool hasProperty(int start) {
	int a = start;
	int b = start + D;
	int c = start + 2 * D;
	if(isAnnogram(a, b) && isAnnogram(b, c) 
		&& isPrime(a) && isPrime(b) && isPrime(c)) return true;
	return false;
}

int main() {

	for(int i = 1000; i <= 10000 - D; i++) {
		if(hasProperty(i)) {
			cout << "Result: " << i << i + D << i + 2 * D << endl;
			
		}
	}

	return 0;
}