const Module = require('./dist/zmakebas.js')

module.exports = (input, labelsMode) => {

    // Prepare args for the zmakebas command.
    const args = [];
    args.push('-a');
    args.push('0');
    if (labelsMode) args.push('-l');
    args.push('-o');
    args.push('output.tap');
    args.push('input.bas');

    // Collect output.
    const out = [];

    // Call the zmakebas module with data for command.
    return new Promise((resolve, reject) => {
        Module({
            arguments: args,
            input,
            out,
            resolve,
            reject,
            print: (text) => out.push({type: 'out', text}),
            printErr: (text) => out.push({type: 'err', text}),
        });
    });
}
