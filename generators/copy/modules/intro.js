/**
 * The sub-generator intro message.
 */

const chalk = require('chalk');

module.exports = function intro() {
  const message =
  chalk.cyan('\n  _____             _        _') +
  chalk.cyan('\n |     |___ ___ _ _| |   ___| |_') +
  chalk.cyan('\n |   --| . | . | | | |__| . | . |') +
  chalk.cyan('\n |_____|___|  _|_  |____|__,|___|') +
  chalk.cyan('\n           |_| |___|\n');
  this.log(message);
};