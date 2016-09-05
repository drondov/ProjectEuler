import math
# def modularPow(n, pow, mod):
# 	if (pow == 0): return 1;
# 	if (pow == 1): return n % mod;
# 	if (pow % 2 == 0):
# 		half = modularPow(n, pow // 2, mod) % mod;
# 		return half * half % mod;
# 	return modularPow(n, pow - 1, mod) * n % mod;


mod = int(1e10);
sum = int(0);
for i in range(1, 1000 + 1):
	sum += pow(int(i), int(i), mod);
	sum %= mod;

print(sum);
# console.log(modularPow(11, 1000, mod));