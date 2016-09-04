fibs = {0: 0, 1: 1};
def fib(n):
	try:
		return fibs[n]
	except:
		fibs[n] = fib(n - 1) + fib(n - 2);
		return fibs[n];

n = 10
while len(str(fib(n))) < 1000: 
	n += 1
print(n)