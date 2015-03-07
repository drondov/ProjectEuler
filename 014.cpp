#include <iostream>
#include <map>

using namespace std;

typedef unsigned long long ULL;

map<int, int> memo;

ULL next(ULL n) {
	if(n % 2 == 0) {
		return n / 2;
	} else {
		return 3 * n + 1;
	}
}

ULL countOfElements(ULL start) {
	ULL cur = start;
	if(start == 1) return 0;
	if(memo[start]) return memo[start];
	
	return memo[start] = countOfElements(next(start)) + 1;
}

int main() {
	ULL max = 0;
	ULL maxNumber = 0;

	
	for(int i = 2; i < 1000000; ++i) {
		ULL curCount = countOfElements(i);
		if(curCount > max) {
			max = curCount;
			maxNumber = i;
		}
	}

	cout << "Number with max chain: " << maxNumber << endl << "Chain size: " << max;

}