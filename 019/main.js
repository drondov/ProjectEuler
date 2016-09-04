// 1 Jan 1900 was a Monday.
// Monday - 0, ... Sunday - 6
// If 1 Jan 1990 - 0, then 1 Jan 1990 - 0 + 365 mod 7 = 1

var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var FEB = 1;
var START_DAY = 5; // 1 Dec 1990
var SUNDAY = 6;

console.log(main());

function isLeap(year) {
	if (year % 400 === 0) return true;
	if (year % 4 === 0 && year % 100 === 0) return false;
	if (year % 4 !== 0) return false;
	return true;
}

function main() {
	var month = 0;
	var year = 1901;
	var day = START_DAY;
	var sundays = 0;
	while(year < 2000) {
		if (month === FEB) {
			day += isLeap(year) ? 29 : 28;
			// if (isLeap(year)) console.log('leap', year);
		} else {
			day += months[month];
		}
		day %= 7;
		if (day === SUNDAY) {
			sundays++;
		}

		// console.log(day, month, year);
		month++;
		if (month > 11) {
			month = 0;
			year++;
		}
	}
	return sundays;
}