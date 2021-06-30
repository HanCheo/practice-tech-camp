// 스트림 미사용
// const http = require('http');

// const server = http.createServer((req, res) => {
//   req.on('data', (d) => {
//     res.write(d.toString().toUpperCase());
//   });
//   req.on('end', () => {
//     res.end();
//   });
// });

// server.listen(process.argv[2]);

//커스텀 스트림
const http = require('http');
const util = require('util');
const stream = require('stream');

function ToUpperStream() {
  stream.Transform.call(this);
}

util.inherits(ToUpperStream, stream.Transform);
ToUpperStream.prototype._transform = function (chunk, enc, cb) {
  chunk = chunk.toString().toUpperCase();
  cb(null, chunk);
};

const server = http.createServer((req, res) => {
  req.pipe(new ToUpperStream()).pipe(res);
});

server.listen(process.argv[2]);
