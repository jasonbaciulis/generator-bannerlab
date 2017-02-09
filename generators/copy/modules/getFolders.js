/**
 * Get all folders in a directory.
 */

const fs = require('fs');
const path = require('path');

module.exports = function getFolders(dir) {

  var foldersArray = fs.readdirSync(dir).filter((file) => {
    if (file !== 'base') {
      return fs.statSync(path.join(dir, file)).isDirectory();
    }
    return false;
  });
  return foldersArray;
};