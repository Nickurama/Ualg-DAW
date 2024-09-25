import http = require('http');

http.createServer((inRequest: http.IncomingMessage, inResponse: http.OutgoingMessage) =>
{
	inResponse.end("OwO :3");
}).listen(8080);
