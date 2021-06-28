const http = require('http');
const { URL } = require('url');

const parseQuery = function (url) {
  switch (url.pathname) {
    case '/api/parsetime':
      return parseTime(new Date(url.searchParams.get('iso')));
    case '/api/unixtime':
      return parseUnix(new Date(url.searchParams.get('iso')));
  }
};

const parseTime = (t) => {
  return {
    hour: t.getHours(),
    minute: t.getMinutes(),
    second: t.getSeconds(),
  };
};

const parseUnix = (t) => {
  return {
    unixtime: t.getTime(),
  };
};

const server = http.createServer((req, res) => {
  let baseURL = 'http://' + req.headers.host + '/';
  let parse = new URL(req.url, baseURL);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(parseQuery(parse)));
});

server.listen(process.argv[2]);
