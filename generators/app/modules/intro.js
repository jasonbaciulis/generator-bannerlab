/**
 * The generator intro message.
 */

const chalk = require('chalk');

module.exports = function intro() {
  const message = chalk.cyan('\n Welcome to') +
  chalk.cyan('\n  _____                     _        _') +
  chalk.cyan('\n | __  |___ ___ ___ ___ ___| |   ___| |_') +
  chalk.cyan('\n | __ -| . |   |   | -_|  _| |__| . | . |') +
  chalk.cyan('\n |_____|__,|_|_|_|_|___|_| |____|__,|___|\n');
  this.log(message);
};
