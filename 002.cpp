#include <stdio.h>

int main() {
	int prevPrev = 1;
	int prev = 1;
	int sum = 0;
	int cur = 1;
	while(cur < 4000000) {
		if(cur % 2 == 0) sum += cur;

		int temp = cur;
		cur = prev + prevPrev;
		prevPrev = prev;
		prev = cur;
	}

	printf("Sum: %d", sum);
	return 0;
}