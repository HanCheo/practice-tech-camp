const fs = require('fs');

module.exports = (directory, file, callback) => {
  fs.readdir(directory, 'utf8', (err, data) => {
    if (err) return callback(err);
    let list = data.filter((a) => a.slice(a.length - file.length - 1) === '.' + file);
    return callback(null, list);
  });
};
