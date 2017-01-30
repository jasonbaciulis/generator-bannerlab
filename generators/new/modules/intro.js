/**
 * The sub-generator intro message.
 */

const chalk = require('chalk');

// module.exports = function intro() {
//   const message =
//   chalk.blue('\n  _____           _   _') +
//   chalk.blue('\n |   | |___ _ _ _| |_|_|_____ ___') +
//   chalk.blue('\n | | | | -_| | | |  _| |     | -_|') +
//   chalk.blue('\n |_|___|___|_____|_| |_|_|_|_|___|\n');
//   this.log(message);
// };

module.exports = function intro() {
  const message =
  chalk.blue('\n  _____           _        _') +
  chalk.blue('\n |   | |___ _ _ _| |   ___| |_') +
  chalk.blue('\n | | | | -_| | | | |__| . | . |') +
  chalk.blue('\n |_|___|___|_____|____|__,|___|\n');
  this.log(message);
};