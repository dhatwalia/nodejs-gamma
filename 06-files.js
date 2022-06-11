var http = require('http');
var fs = require('fs');
let demoCounter;

fs.readFile('06-demo1.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('The file contains the value ' + data + '.');
});

fs.writeFile('06-demo2.txt', 'Have a Good day!', function (err) {
    if (err) throw err;
    console.log('File Saved!');
});

http.createServer(function (req, res) {
    fs.readFile('06-demo1.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);
