var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
	console.log('URL: ' + req.url);
	/*res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
	var myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf8');
	myReadShort.pipe(res);*/ // HTML


	res.writeHead(200, {'Content-Type': 'application/json; charset=utf8'});
	var obj = {
		model: 'Vista',
		system: 'XP',
		year: 2000,
	};
	res.end(JSON.stringify(obj)); // JSON
});

server.listen(19090, '127.0.0.1');
console.log('Working with port 19090');
