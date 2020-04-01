const yargs = require('yargs');

const argv = yargs
  .usage('Usage: $0 [options]')
  .option('i', {
    alias: 'input',
    describe: 'an input file',
    type: 'string'
  })
  .option('o', {
    alias: 'output',
    describe: 'an output file',
    type: 'string'
  })
  .option('a', {
    alias: 'action',
    describe: 'an action encode/decode',
    type: 'string'
  })
  .option('s', {
    alias: 'shift',
    describe: 'a shift',
    type: 'number'
  }).argv;

module.exports = argv;
