const http = require('http');

const server = http.createServer((req, res) => {
  req.on('data', (d) => {
    res.write(d.toString().toUpperCase());
  });
  req.on('end', () => {
    res.end();
  });
});

server.listen(process.argv[2]);
