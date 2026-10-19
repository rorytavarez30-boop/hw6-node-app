const http = require('node:http');

function add(a, b) {
  return a + b;
}

function createServer() {
  return http.createServer((req, res) => {
    if (req.url === '/health') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ status: 'ok' }));
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from HW6 - built by Jenkins!\n');
  });
}

module.exports = { add, createServer };
