var bouncyCount = 0;
var i = 0;
while (!i || bouncyCount / i < 0.99) {
	i++;
	if (isBouncy(i)) bouncyCount++;
}
console.log(i);
console.log(bouncyCount);
console.log(bouncyCount / i);

function test() {
	if (isBouncy(134468)) throw new Error();
	if (isBouncy(66420)) throw new Error();
	if (!isBouncy(155349)) throw new Error();
}

function isBouncy(n) {
	var str = n.toString();
	return str.split('').sort((x,y) => x - y).join('') !== str &&
		str.split('').sort((x,y) => y - x).join('') !== str;
}