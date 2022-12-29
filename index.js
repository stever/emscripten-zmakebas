const Module = require('./dist/zmakebas.js')

module.exports = (input, labelsMode) => {
  const args = [];
  args.push('-a'); args.push('0');
  if (labelsMode) args.push('-l');
  args.push('-o'); args.push('output.tap');
  args.push('input.bas');
  return new Promise((resolve, reject) => {
    Module({
      'input': input,
      'resolve': resolve,
      'reject': reject,
      'arguments': args
    });
  });
}
