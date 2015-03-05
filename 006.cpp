#include <iostream>

long long solve(long long n) {
	long long sumOfSquares = n*(n+1)*(2*n+1)/6;
	long long squareOfSum = n*n*(n + 1)*(n + 1) / 4;
	return squareOfSum - sumOfSquares;
}

int main() {
	std::cout << "Result: " << solve(100);
	return 0;
}