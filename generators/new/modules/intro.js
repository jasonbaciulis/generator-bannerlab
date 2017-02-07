/**
 * The sub-generator intro message.
 */

const chalk = require('chalk');

module.exports = function intro() {
  const message =
  chalk.cyan('\n  _____           _        _') +
  chalk.cyan('\n |   | |___ _ _ _| |   ___| |_') +
  chalk.cyan('\n | | | | -_| | | | |__| . | . |') +
  chalk.cyan('\n |_|___|___|_____|____|__,|___|\n');
  this.log(message);
};