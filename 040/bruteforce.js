var d = '';
for(var i = 0; i < 1000000; ++i) {
	d += i;
}
var result = d[1] * d[10] * d[100] * d[1000] * d[10000] * d[100000] * d[1000000];
console.log(result);