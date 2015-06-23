var dTime = new Date();

for (var i = 0; i < 1000000; i++) {
	var r;
	r = 1 + 1;
}

var dTimeEnd = new Date();

try	{
	print('log: ' + (dTimeEnd - dTime) + 'ms');
} catch(e) {
	console.log('log: ' + (dTimeEnd - dTime) + 'ms');
}
