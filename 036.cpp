#include <stdio.h>
#include <iostream>
#include <string>

typedef unsigned long long ULL;

using namespace std;

int reverse(int n) {
	int result = 0;
	while(n) {
		result = result * 10 + n % 10;
		n /= 10;
	}
	return result;
}


bool isBinaryPalindrom(int n) {
	string result = "";
	string revResult = "";
	while(n) {
		char digit = (n % 2) + '0';
		result = digit + result;
		revResult += digit;
		n /= 2;
	}ы
	return result == revResult;
}

bool isSuperPalindrome(int n) {
	if(n != reverse(n)) return false;
	return isBinaryPalindrom(n);
}


int main() {
	ULL sum = 0;
	for(int i = 1; i < 1000000; ++i) {
		if(isSuperPalindrome(i)) sum += i;
	}

	cout << "Result: " << sum;
	return 0;
}