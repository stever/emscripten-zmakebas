const Module = require('./dist/zmakebas.js')

module.exports = input => {
  return new Promise((resolve, reject) => {
    Module({
      'input': input,
      'resolve': resolve,
      'arguments': ['-a', '0', '-o', 'output.tap', 'input.bas']
    });
  });
}
