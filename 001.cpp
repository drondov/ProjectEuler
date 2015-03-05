#include <stdio.h>


int getSumBelow(int below, int mul) {
	int maxEl = below / mul;
	return mul * maxEl * (maxEl + 1) / 2;
}

int main() {
	int sum = getSumBelow(1000, 3);
	sum += getSumBelow(1000, 5);
	sum -= getSumBelow(1000, 15);
	printf("Sum of all multiples of 3 or 5 below 1000: %i", sum);
	return 0;
}