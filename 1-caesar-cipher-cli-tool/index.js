const chalk = require('chalk');
const yargs = require('yargs');
const fs = require('fs');
const path = require('path');

const args = require('./args');
const CaesarCipherTransform = require('./transform');

let myReadableFileStream;
let myWritableFileStream;

// const myReadableFileStream = fs.createReadStream (path.join (path.dirname(__filename), args.i), {encoding: 'utf-8'});
if (args.i) myReadableFileStream = fs.createReadStream (path.join (path.dirname(__filename), args.i));
if (args.o) myWritableFileStream = fs.createWriteStream (path.join (path.dirname(__filename), args.o));

// const myWritableFileStream = fs.createWriteStream (path.join (path.dirname(__filename), args.o), {'flags': 'a', encoding: 'utf-8'});


const stdInReadableStream = process.stdin;
const stdOutWritableStream = process.stdout;

const inputStream = (args.i) ? myReadableFileStream : stdInReadableStream;
const outputStream = (args.o) ? myWritableFileStream : stdOutWritableStream;

const myTransformStream = new CaesarCipherTransform (args.s, args.a);


inputStream.pipe(myTransformStream).pipe(outputStream)


// myReadableFileStream.pipe(myTransformStream).pipe(myWritableFileStream)

// stdInReadableStream.pipe(myTransformStream).pipe(stdOutWritableStream)

