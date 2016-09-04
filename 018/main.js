const fs = require('fs');

const trig = fs.readFileSync('trig.big.txt')
	.toString()
	.split('\n')
	.map(x => x.split(' ').map(y => +y));

const matrix = generateMatrix(trig.length, trig.length, 0);
matrix[0][0] = trig[0][0]; // Trivial case.

function solve(i, j) {
	if (matrix[i][j]) return matrix[i][j];
	var left = trig[i][j];
	var right = trig[i][j];
	if (j > 0) left += solve(i - 1, j - 1);
	if (j < trig[i - 1].length) right += solve(i - 1, j); 
	matrix[i][j] = Math.max(left, right);
	return matrix[i][j];
}

console.log(main());
// console.log(matrix);

function main() {
	var results = [];
	for(var i = 0; i < trig.length; ++i) {
		var cur = solve(trig.length - 1, i);
		results.push(cur);
	}
	return Math.max.apply(Math, results);
}

function generateMatrix(n, m, fill) {
	if (!fill) fill = 0;
	var matrix = [];
	for(var i = 0; i < n; ++i) {
		matrix[i] = [];
		for(var j = 0; j < m; ++j) {
			matrix[i][j] = fill;
		}
	}
	return matrix;
}
