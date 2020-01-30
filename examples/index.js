var http = require('http');

var server = http.createServer(function(req, res) {
	console.log('URL: ' + req.url);
	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf8'});
	res.end('Hello world!');
});

server.listen(19090, '127.0.0.1');
console.log('Working with port 19090');
