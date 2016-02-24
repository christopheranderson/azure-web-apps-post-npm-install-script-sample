const http = require('http');

const hostname = '127.0.0.1';
const port = process.env.port || 3000;
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  var results = fs.readdirSync(path.join(__dirname, 'public'));
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(JSON.stringify(results));
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});