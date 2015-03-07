#include <iostream>
#include <stdio.h>

using namespace std;

long findProd() {
	for(int a = 1000; a > 0; a--) {
		for(int b = 2; b < 1000 - a; b++) {
			int c = 1000 - a - b;
			if(a*a == b*b + c*c) {
				printf("a: %d, b: %d, c: %d ", a, b, c); 
				return a*b*c;
			}
		}
	}
	return 0;
}

int main() {
	std::cout <<  "Result: " << findProd();
	return 0;
}