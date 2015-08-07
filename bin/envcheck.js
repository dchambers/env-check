#!/usr/bin/env node
var checkEnv = require('check-env');
var colors = require('colors/safe');

try {
  checkEnv(process.argv.slice(2));
}
catch(e) {
  console.error(colors.red('Error: ' + e.message + '.'));
  process.exit(1);
}
