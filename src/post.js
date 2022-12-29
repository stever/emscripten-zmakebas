// noinspection JSUnresolvedVariable

Module['postRun'] = [];

Module['postRun'].push(function () {
    const filename = 'output.tap';

    // Ensure that the required output file is always created.
    // NOTE: This is done by open and closing a file in append mode.
    const file = FS.open(filename, 'a');
    FS.close(file);

    // Command is successful if the output has content, fails otherwise.
    const output = FS.readFile(filename);
    if (output.length === 0) {
        Module['reject']();
    } else {
        Module['resolve'](output);
    }
});
