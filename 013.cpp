#include <iostream>
#include <fstream>
#include <string>

using namespace std;

string zeroFills(string a, int size) {
	for(int i = 0; i < size; ++i) {
		a = "0" + a;
	}
	return a;
}

string sum(string a, string b) {
	string result;
	int size = a.size() > b.size() ? a.size() : b.size();

	if(a.size() < size) {
		a = zeroFills(a, size - a.size());
	} else {
		b = zeroFills(b, size - b.size());
	}

	int r = 0;
	for(int i = size - 1; i >= 0; --i) {
		int digit = a[i] - '0' + b[i] - '0' + r;
		result = to_string(digit % 10) + result;
		r = digit / 10;
	}

	if(r > 0)
		result = to_string(r) + result;
	return result;
}

int main() {

	string line;
	ifstream file("./013.in");

	string s;
	getline(file, s);

	while(!file.eof()) {
		getline(file, line);
		s = sum(line, s);
		// cout << line << " + ";
	}

	cout << s;

	return 0;
}