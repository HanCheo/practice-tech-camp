const http = require('http');

let datas = '';

http
  .get(process.argv[2], (res) => {
    res.setEncoding('utf8');
    res.on('data', (d) => (datas += d));
    res.on('err', console.error);
    res.on('end', () => {
      console.log(datas.length);
      console.log(datas);
    });
  })
  .on('err', console.error);
