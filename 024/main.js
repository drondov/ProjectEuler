function getPermutations(n) {
	if (n == 0) return ['', '', '', '', '', '', '', '', '', ''];
	var perms = getPermutations(n - 1);
	var result = [];
	for(var i = n; i < 10; ++i) {
		result = result.concat(perms.map(x => x + i));
	}
	return result;
}

console.log(getPermutations(5))