#include <stdio.h>

int reverse(int n) {
	int reversed = 0;
	while(n != 0) {
		reversed = reversed * 10 + n % 10;
		n /= 10;
	}
	return reversed;
}

bool isPalindrome(int n) {
	return n == reverse(n);
}

int main() {

	int a, b;
	bool flag = true;
	int prod = 0;
	for(a = 999; a > 100; --a) {
		for(b = 999; b > 100; --b) {
			int cprod = a * b;
			if(isPalindrome(cprod) && cprod > prod) prod = cprod; 
		}
	}
		

	printf("Result: %d", prod);

	return 0;
}