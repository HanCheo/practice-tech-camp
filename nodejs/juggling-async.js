const http = require('http');

let str = Array(3).fill('');
let cnt = 0;

for (let i = 2; i < process.argv.length; i++) {
  http
    .get(process.argv[i], (res) => {
      res.setEncoding('utf8');
      res.on('err', console.error);
      res.on('data', (d) => (str[i - 2] += d));
      res.on('end', () => {
        cnt++;
        if (cnt === 3) str.forEach((a) => console.log(a));
      });
    })
    .on('err', console.error);
}
