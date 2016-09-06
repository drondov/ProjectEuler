function getLexical(n) {
	if (n === 1000) return 'one thousand';
	if (n === 0) return '';
	if (n === 1) return 'one';
	if (n === 2) return 'two';
	if (n === 3) return 'three';
	if (n === 4) return 'four';
	if (n === 5) return 'five';
	if (n === 6) return 'six';
	if (n === 7) return 'seven';
	if (n === 8) return 'eight';
	if (n === 9) return 'nine';
	if (n === 10) return 'ten';
	if (n === 11) return 'eleven';
	if (n === 12) return 'twelve';
	if (n === 13) return 'thirteen';
	if (n === 14) return 'fourteen';
	if (n === 15) return 'fifteen';
	if (n === 16) return 'sixteen';
	if (n === 17) return 'seventeen';
	if (n === 18) return 'eighteen';
	if (n === 19) return 'nineteen';
	if (n >= 100) return getLexical(Math.floor(n / 100)) + ' hundred' + ((n % 100) === 0 ? '' : ' and ' + getLexical(n % 100));
	if (n >= 20) {
		// For two digits more than 20.
		var sn = Math.floor(n / 10);
		var snstr = '';
		if (sn === 2) {
			snstr = 'twenty';
		} else if (sn === 3) {
			snstr = 'thirty';
		} else if (sn === 4) {
			snstr = 'forty';
		} else if (sn === 5) {
			snstr = 'fifty';
		} else if (sn === 8) {
			snstr = 'eighty'
		} else {
			snstr = getLexical(sn) + 'ty';
		}
		return snstr + ' ' + getLexical(n % 10);
	}
}

function main() {
	var sum = 0;
	for(var i = 1; i <= 1000; ++i) {
		str = getLexical(i);
		sum += str.replace(/\s/g, '').length;
		// console.log(str.replace(/\s/g, '').length, str);
	}
	console.log(sum);
}

main();