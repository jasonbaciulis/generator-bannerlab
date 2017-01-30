/**
 * The sub-generator intro message.
 */

const chalk = require('chalk');

// module.exports = function intro() {
//   const message =
//   chalk.blue('\n  _____             _   _') +
//   chalk.blue('\n |     |___ ___ _ _| |_|_|_____ ___') +
//   chalk.blue('\n |   --| . | . | | |  _| |     | -_|') +
//   chalk.blue('\n |_____|___|  _|_  |_| |_|_|_|_|___|') +
//   chalk.blue('\n           |_| |___|\n');
//   this.log(message);
// };


module.exports = function intro() {
  const message =
  chalk.blue('\n  _____             _        _') +
  chalk.blue('\n |     |___ ___ _ _| |   ___| |_') +
  chalk.blue('\n |   --| . | . | | | |__| . | . |') +
  chalk.blue('\n |_____|___|  _|_  |____|__,|___|') +
  chalk.blue('\n           |_| |___|\n');
  this.log(message);
};