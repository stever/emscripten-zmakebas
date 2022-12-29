// noinspection JSUnresolvedVariable

Module['postRun'] = [];

Module['postRun'].push(function () {
    const filename = 'output.tap';

    // Create file if it doesn't exist.
    const file = FS.open(filename, 'a');
    FS.close(file);

    const output = FS.readFile(filename);
    Module['resolve'](output);
});
