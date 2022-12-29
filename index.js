const zmakebas = require('./dist/zmakebas.js')

module.exports = (input, labelsMode) => {

    // Prepare args for the zmakebas command.
    const args = [];
    args.push('-a');
    args.push('0');
    if (labelsMode) args.push('-l');
    args.push('-o');
    args.push('output.tap');
    args.push('input.bas');

    // Call the zmakebas module with data for command.
    return new Promise((resolve, reject) => {
        zmakebas({
            'arguments': args,
            'input': input,
            'resolve': resolve,
            'reject': reject
        });
    });
}
