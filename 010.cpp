#include <iostream>

using namespace std;

int main() {
	const int limit = 2000000; 

	int* numbers = new int[limit];

	for(int i = 0; i < limit; ++i) {
		numbers[i] = i;
	}
	numbers[1] = 0;

	for(int step = 2; step < limit; ++step) {
		if(numbers[step] == 0) continue;
		for(int j = step * 2; j < limit; j+=step) {
			if(numbers[j] % step == 0) numbers[j] = 0;
		}
	}

	unsigned long long sum = 0;

	for(int i = 0; i < limit; ++i) {
			sum += numbers[i];
	}

	cout << "Result: " << sum << endl;

	return 0;


}