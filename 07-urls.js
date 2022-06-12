var http = require('http');
var url = require('url');
var fs = require('fs');

var myAddress = 'http://localhost:8080/default.htm?year=2017&month=february';
var myQuery = url.parse(myAddress, true);

console.log('Host : ' + myQuery.host); //returns 'localhost:8080'
console.log('Pathname : ' + myQuery.pathname); //returns '/default.htm'
console.log('Search : ' + myQuery.search); //returns '?year=2017&month=february'

var qdata = myQuery.query; //returns an object: { year: 2017, month: 'february' }
console.log('Month : ' + qdata.month); //returns 'february'

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);
