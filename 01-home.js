var http = require('http');
var dt = require('./04-modules');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write("The date and time are currently: " + dt.myDateTime() + "\n");
  res.end('Hello World!');
}).listen(8080);

console.log('This example is different!');
console.log('The result is displayed in the Command Line Interface');
