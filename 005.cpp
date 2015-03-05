#include <stdio.h>
#include <iostream>
#include <math.h>
#include <map>

bool isPrime(int n) {
	int minFrac = pow(n, 0.5);

	for(int i = 2; i <= minFrac; ++i) {
		if(n % i == 0) return false;
	}
	return true;
}

int max(int a, int b) {
	return a > b ? a : b;
}

int howMuch(int n, int mult) {
	int result = 0;
	while(n % mult == 0) {
		result++;
		n /= mult;
	}
	return result;
}

long long smallestMult(int n) {
	int minFrac = pow(n, 0.5);
	std::map<int, int> fracs;

	for(int i = 2; i < n; ++i) {
		if(isPrime(i)) {
			fracs[i] = max(fracs[i], 1);
			continue;
		}
		for(auto it = fracs.begin(); it != fracs.end(); ++it) {
			if(i % it->first == 0) {
				it->second = max(it->second, howMuch(i, it->first));
			} 
		}
	}
	
	long long result = 1;
	for(auto it = fracs.begin(); it != fracs.end(); ++it) {
		result *= pow(it->first, it->second);
	}
	return result;

}

int main() {
	std::cout << "Result " << smallestMult(20);
	return 0;
}