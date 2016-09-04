const fs = require('fs');

const matrix = fs.readFileSync('./matrix.txt')
	.toString()
	.split('\n')
	.map(x => x.split(',').map(y => +y));

const result = generateMatrix(80, 80, 0); // Create matrix for results.
result[0][0] = matrix[0][0]; // Trivial case.

console.log(dynamic(79, 79)); // Print result.

function dynamic(i, j) {
	var left = Infinity;
	var top = Infinity;
	var down = Infinity;
	if (result[i][j]) return result[i][j];
	result[i][j] = Infinity;
	if (i > 0) left = dynamic(i - 1, j) + matrix[i][j];
	if (j > 0) top = dynamic(i, j - 1) + matrix[i][j];
	if (j < matrix.length - 1) down = dynamic(i, j + 1) + matrix[i][j];
	result[i][j] = Math.min(left, top, down);
	return result[i][j];
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