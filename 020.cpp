#include <iostream>
#include <string>

using namespace std;

string mult(string a, unsigned int b) {
	string result = "";
	int r = 0;
	for(int i = a.size() - 1; i >= 0; --i) {
		int digit = a[i] - '0';
		digit *= b;
		digit += r;
		result = to_string(digit % 10) + result;
		r = digit / 10;
	}
	if(r > 0) {
		result = to_string(r) + result;
	}
	

	return result;
}

int main() {
	string fact100 = "1";
	for(int i = 2; i <= 100; ++i) {
		fact100 = mult(fact100, i);
	}
	int sumOfDigits = 0;
	for(int i = 0; i < fact100.size(); ++i) {
		sumOfDigits += fact100[i] - '0';
	}
	
	cout << "Factorial of 100: " << fact100<< endl;
	cout << "Result: " << sumOfDigits;
	return 0;
}