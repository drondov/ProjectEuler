#include <iostream>
#include <fstream>
#include <string>

using namespace std;

#define PROD_SIZE 	4
#define MATRIX_SIZE 20
int matrix[MATRIX_SIZE][MATRIX_SIZE];

int main() {
	

	ifstream file("./011.in");

	string line;
	int row = 0;
	while(!file.eof()) {
		getline(file, line);
		for(int i = 0; i < MATRIX_SIZE; ++i) {
			matrix[row][i] = (line[i * 3] - '0') * 10 + line[i * 3 + 1] - '0';
		}
		row++;
	}

	unsigned long long max = 0;

	
	for(int i = 0; i < MATRIX_SIZE; ++i) {
		for(int j = 0; j < MATRIX_SIZE - PROD_SIZE; ++j) {
			unsigned long long curProd = 1;
			for(int k = 0; k < PROD_SIZE; ++k) {
				curProd *= matrix[i][j + k];
			}
			if(curProd > max) max = curProd;
		}
	}

	for(int i = 0; i < MATRIX_SIZE; ++i) {
		for(int j = 0; j < MATRIX_SIZE - PROD_SIZE; ++j) {
			unsigned long long curProd = 1;
			for(int k = 0; k < PROD_SIZE; ++k) {
				curProd *= matrix[i + k][j];
			}
			if(curProd > max) max = curProd;
		}
	}

	for(int i = 0; i < MATRIX_SIZE - PROD_SIZE; ++i) {
		for(int j = 0; j < MATRIX_SIZE - PROD_SIZE; ++j) {
			unsigned long long curProd = 1;
			for(int k = 0; k < PROD_SIZE; ++k) {
				curProd *= matrix[i + k][j + k];
			}
			if(curProd > max) max = curProd;
		}
	}

	for(int i = PROD_SIZE; i < MATRIX_SIZE; ++i) {
		for(int j = 0; j < MATRIX_SIZE + PROD_SIZE; ++j) {
			unsigned long long curProd = 1;
			for(int k = 0; k < PROD_SIZE; ++k) {
				curProd *= matrix[i - k][j + k];
			}
			if(curProd > max) max = curProd;
		}
	}



	cout << "Result: " << max;


	return 0;
}