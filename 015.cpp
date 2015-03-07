#include <iostream>
#include <stdio.h>

using namespace std;

#define N 20

typedef unsigned long long ULL;

ULL matrix[N + 1][N + 1];

ULL recursive(int x, int y) {
	if(matrix[x][y] != 0 ) return matrix[x][y];
	ULL sum = 0;
	if(x > 0) sum += recursive(x - 1, y);
	if(y > 0) sum += recursive(x, y - 1);
	matrix[x][y] = sum == 0 ? 1 : sum;
	return matrix[x][y];
}

int main() {
	cout << "Result: " << recursive(N, N) << endl; 
}