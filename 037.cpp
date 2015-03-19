#include <iostream>
#include <math.h>

using namespace std;

typedef unsigned long long ULL;

ULL reverse(ULL a) {
	ULL result = 0;
	while(a > 0) {
		result = result * 10 + a % 10;
		a /= 10;
	}
	return result;
}

bool isPrime(ULL a) {
	if(a == 1) return false;
	ULL maxFrac = pow(a, 0.5);
	for(int i = 2; i <= maxFrac; ++i) {
		if(a % i == 0) return false;
	}
	return true;
}

ULL nextLeft(ULL a) {
	return reverse(reverse(a) / 10);
}

bool hasPropertyLeft(ULL a) {
	while(a > 0) {
		if(!isPrime(a)) return false;
		a = nextLeft(a);
	}
	return true;
}

bool hasPropertyRight(ULL a) {
	while(a > 0) {
		if(!isPrime(a)) return false;
		a /= 10;
	}
	return true;
}



int main() {

	ULL sum = 0;
	int k = 11;
	for(ULL i = 11; k > 0; ++i) {
		if(hasPropertyLeft(i) && hasPropertyRight(i)) {
			sum += i;
			cout << i << endl;
			k--;
		}
	}
	cout << "Result: " << sum;
	

	return 0;
}