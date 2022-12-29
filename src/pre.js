// noinspection JSUnresolvedVariable

Module['preRun'] = [];

Module['preRun'].push(function () {

    // Write the required input file.
    FS.writeFile('input.bas', Module['input']);
});
