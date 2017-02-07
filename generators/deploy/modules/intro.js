/**
 * The sub-generator intro message.
 */

const chalk = require('chalk');

module.exports = function intro() {
  const message =
  chalk.cyan('\n  ____          _         _        _') +
  chalk.cyan('\n |    \ ___ ___| |___ _ _| |   ___| |_') +
  chalk.cyan('\n |  |  | -_| . | | . | | | |__| . | . |') +
  chalk.cyan('\n |____/|___|  _|_|___|_  |____|__,|___|') +
  chalk.cyan('\n           |_|       |___|\n');
  this.log(message);
};