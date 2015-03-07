#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

typedef unsigned long long ULL;

vector<ULL> excessiveNumbers;

ULL sumOfDivs(ULL n) {
	ULL sum = 0;
	for(int i = 1; i < n; ++i) {
		if(n % i == 0) {
			sum += i;
		}
	}
	return sum;
}

bool isExNumber(ULL n) {
	return sumOfDivs(n) > n;
}

void loadExcessiveNumbers() {
	for(int i = 12; i < 28123; ++i) {
		if(isExNumber(i)) {
			excessiveNumbers.push_back(i);
		}
	}
}

bool isMayBeWritten(int n) {
	if(n < 12) return false;
	for(int i = 0; i < excessiveNumbers.size(); ++i) {
		if(binary_search(excessiveNumbers.begin(), excessiveNumbers.end(),
		 n - excessiveNumbers[i])) return true;
	}
	return false;
}

int main() {
	loadExcessiveNumbers();
	cout << "Loaded excessive numbers: " << excessiveNumbers.size() << endl;
	
	sort(excessiveNumbers.begin(), excessiveNumbers.end());


	ULL sum = 0;

	for(int i = 1; i <= 28123; ++i) {
		if(!isMayBeWritten(i)) sum += i;
		if(i % 1000 == 0) cout << "Loaded " << i << endl;
	}

	cout << "Result: " << sum;

	return 0;
}