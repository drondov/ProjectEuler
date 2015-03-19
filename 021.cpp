#include <iostream>
#include <map>
#include <vector>

using namespace std;

map<int, int> memo;
vector<int> friends;


int sumOfDivs(int n) {
	int sum = 0;
	for(int i = 1; i < n; ++i) {
		if(n % i == 0) sum += i;
	}
	return sum;
}

void findAllDivsBefore(int n) {
	for(int i = 2; i < n; ++i) {
		memo[i] = sumOfDivs(i);
	}
}

void findFriendsByMemo() {
	for(auto it = memo.begin(); it != memo.end(); ++it) {
		if(memo[it->second] == it->first && it->second != memo[it->second]) {
		
			friends.push_back(it->first);
		}
	}
}

int main() {
	findAllDivsBefore(10000);
	findFriendsByMemo();

	unsigned long long sum = 0;

	for(int i = 0; i < friends.size(); ++i) {
		sum += friends[i];
		cout << friends[i] << " ";
	}

	cout << "Result: " << sum;

	return 0;
}