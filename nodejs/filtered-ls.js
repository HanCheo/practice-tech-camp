const fs = require('fs');

const callback = (err, list) => {
  if (err) return console.error(err);
  list
    .filter((a) => a.slice(a.length - process.argv[3].length - 1) === '.' + process.argv[3])
    .forEach((a) => console.log(a));
};

fs.readdir(process.argv[2], callback);
