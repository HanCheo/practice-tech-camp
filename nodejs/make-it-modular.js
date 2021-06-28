const myModule = require('./mymodule.js');

const callback = (err, data) => {
  if (err) return console.error(err);
  data.forEach((a) => console.log(a));
};

myModule(process.argv[2], process.argv[3], callback);
