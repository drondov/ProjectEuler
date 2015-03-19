#include <iostream>
#include <vector>

using namespace std;

typedef unsigned long long ULL;

#define MAX_SQ 100000000

vector<ULL> squares;

void loadSquares() {
	ULL i = 0;
	ULL sq = 0;
	while((sq = i*i) < MAX_SQ) {
		squares.push_back(sq);
		i++;
	}
}

bool mayBeWritten(ULL a) {
	int k = 0; 
	int i = 0;
	ULL sum = 0;
	while(true) {
		if(sum == a && (i - k) >= 1) return true;
		if(sum > a) {
			if(k < i) {
				sum -= squares[k];
				k++;
			} else return false;
		} else {
			if(i < squares.size()) {
				i++; 
				sum += squares[i];
			} else return false;
		}
		// sum = 0;
		// for(int j = k; j < i; ++j) sum += squares[j];
	}
	return false;
} 

ULL reverse(ULL a) {
	ULL r = 0;
	while(a > 0) { 
		r = 10 * r + a % 10;
		a /= 10;
	}
	return r;
}

bool isPalindrom(ULL a) {
	return a == reverse(a);
}

int main() {
	loadSquares();

	ULL sum = 0;
	for(ULL i = 2; i < MAX_SQ; ++i) {
		if(isPalindrom(i) && mayBeWritten(i)) {
			cout << i << endl;
			sum += i;
		}
	}
	cout << "Result: " << sum;
	return 0;
}