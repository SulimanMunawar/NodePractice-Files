const http = require('http');
const Data = require('./data');

http.createServer((req, res) => {
    res.writeHead(200, { 'content-Type': 'application/json' });
    res.write(JSON.stringify(Data));
    res.end();
}).listen(4500);