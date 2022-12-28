# zmakebas

Emscripten conversion for zmakebas which converts BASIC to a TAP tape file.

## Usage

```bash
npm install zmakebas
```

```javascript
import zmakebas from "zmakebas";

const tap = zmakebas('10 PRINT "Hello"');
```

## Build library

Install & activate `emsdk` from Emscripten:

```bash
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk/
git pull
./emsdk install latest
./emsdk activate latest
source ./emsdk_env.sh
```

```bash
npm install
npm run build
npm run test
```

## zmakebas notes

### Description

zmakebas converts a Spectrum Basic program written as a text file into
an actual speccy Basic file (as a .TAP file, or optionally a raw
headerless file).

Using zmakebas rather than (say) writing the Basic in an emulator
means you can write using a nicer editor, and can use tools which work
on text files, etc. Also, with the `-l` option you can write without
line numbers, using labels in their place where necessary.

The program was originally intended to be used simply to make little
loader programs, so they wouldn't have to be sourceless binaries.
However, I went to a fair amount of effort to make sure it'd work for
bigger, more serious programs too, so you can also use it for that
kind of thing.

### Miscellaneous

There's a short demo file showing the use of escape sequences for UDGs
and block graphics characters etc. here, named `demo.bas`. You can use
`zmakebas demo.bas` to generate an `out.tap` file from it. A version
using labels is in `demolbl.bas`, which can be converted with
`zmakebas -l demolbl.bas`.

### Contacting the original author

You can email me at russell.marks@ntlworld.com.

Share and enjoy! 

-Rus.

## Licenses

### zmakebas

Public domain by Russell Marks.

### emscripten-fs-example

MIT License

Copyright (c) 2018 Damián Silvani

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
