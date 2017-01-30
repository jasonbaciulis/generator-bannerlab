/**
 * The sub-generator intro message.
 */

const chalk = require('chalk');

// module.exports = function intro() {
//   const message =
//   chalk.blue('\n  ____          _         _   _') +
//   chalk.blue('\n |    \\ ___ ___| |___ _ _| |_|_|_____ ___') +
//   chalk.blue('\n |  |  | -_| . | | . | | |  _| |     | -_|') +
//   chalk.blue('\n |____/|___|  _|_|___|_  |_| |_|_|_|_|___|') +
//   chalk.blue('\n           |_|       |___|\n');
//   this.log(message);
// };

module.exports = function intro() {
  const message =
  chalk.blue('\n  ____          _         _        _') +
  chalk.blue('\n |    \\ ___ __| |___ _ _| |   ___| |_') +
  chalk.blue('\n |  |  | -_| . | | . | | | |__| . | . |') +
  chalk.blue('\n |____/|___|  _|_|___|_  |____|__,|___|') +
  chalk.blue('\n           |_|       |___|\n');
  this.log(message);
};