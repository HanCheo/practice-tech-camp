const net = require('net');

const server = net.createServer(function (socket) {
  const date = new Date();
  let str = '';
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const hh = date.getHours();
  const mm = date.getMinutes();

  str = `${y}-${m < 10 ? '0' + m : m}-${d < 10 ? '0' + d : d} ${hh < 10 ? '0' + hh : hh}:${mm < 10 ? '0' + mm : mm}`;

  socket.end(str + '\n');
});

server.listen(process.argv[2]);
