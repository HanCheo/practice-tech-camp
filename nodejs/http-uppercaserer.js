const http = require('http');
const map = require('through2-map');

const server = http.createServer((req, res) => {
  req.pipe(map((data) => data.toString().toUpperCase())).pipe(res);
});

server.listen(process.argv[2]);
