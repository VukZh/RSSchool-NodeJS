const chalk = require('chalk');
const yargs = require('yargs');
const fs = require('fs');
const path = require('path');

const args = require('./args');
const CaesarCipherTransform = require('./transform');

// const myReadableFileStream = fs.createReadStream (path.join (path.dirname(__filename), args.i), {encoding: 'utf-8'});
const myReadableFileStream = fs.createReadStream (path.join (path.dirname(__filename), args.i));


// const myWritableFileStream = fs.createWriteStream (path.join (path.dirname(__filename), args.o), {'flags': 'a', encoding: 'utf-8'});
const myWritableFileStream = fs.createWriteStream (path.join (path.dirname(__filename), args.o));

const myTransformStream = new CaesarCipherTransform (args.s, args.a);

myReadableFileStream.pipe(myTransformStream).pipe(myWritableFileStream)
// myReadableFileStream.pipe(myWritableFileStream)

