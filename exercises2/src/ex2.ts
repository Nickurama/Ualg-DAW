import http = require('http') ;

http.createServer( function (req, res) {
	res.writeHead(200, { 'Content - Type ' : 'text/html' }) ;
	res.end('Hello World !');
}).listen(80);

// same function but with arrow function
http.createServer( (req, res) => {
	res.writeHead(200, { 'Content - Type ' : 'text/html' }) ;
	res.end('Hello World !');
}).listen(80);
