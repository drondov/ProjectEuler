#include <iostream>
#include <string>

using namespace std;

string doubleMult(string num) {
	string result = "";
	int r = 0;
	for(int i = num.size() - 1; i >= 0; --i) {
		int digit = num[i] - '0';
		digit *= 2;
		digit += r;
		result = to_string(digit % 10) + result;
		r = digit / 10;
	}
	if(r > 0) {
		result = to_string(r) + result;
	}

	return result;
}

string pow2(int n) {
	string num = "1";
	for(int i = 0; i < n; ++i) {
		num = doubleMult(num);
	}
	return num;
}

int main() {
	string num = pow2(1000);
	int sum = 0;
	for(int i = 0; i < num.size(); ++i) {
		sum += num[i] - '0';
	}

	cout << "Result: " << sum;
	return 0;
}