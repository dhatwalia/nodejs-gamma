var http = require('http');
var uc = require('upper-case');
var url = require('url');
var dt = require('./04-modules');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write("The date and time are currently: " + dt.myDateTime() + "\n");

  // Split the query
  var splitQuery = url.parse(req.url, true).query;
  res.write("This is the month of " + splitQuery.month + " " + splitQuery.year + ". \n");

  res.end(uc.upperCase("Hello World!"));
}).listen(8080);

console.log('This example is different!');
console.log('The result is displayed in the Command Line Interface');
