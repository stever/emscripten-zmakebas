Module['preRun'] = [];
Module['preRun'].push(function() {
  FS.writeFile('input.bas', Module['input']);
});
