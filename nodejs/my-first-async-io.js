const callback = (err, recive) => {
  if (err) return console.error(err);
  console.log(recive.split('\n').length - 1);
};

require('fs').readFile(process.argv[2], 'utf8', callback);
