const chalk = require("chalk");
const fs = require("fs");
const path = require("path");

const args = require("./args");
const CaesarCipherTransform = require("./Transform");
const ArgumentsError = require("./ArgumentsError");

let myReadableFileStream;
let myWritableFileStream;

function checkArgs() {
  if (!args.a) throw new ArgumentsError("Missing required argument: a !!!");
  if (!args.s) throw new ArgumentsError("Missing required argument: s !!!");
}

try {
  checkArgs();
} catch (err) {
  console.error("err.stack: " + chalk.red.dim(err.stack));
  fs.writeSync(process.stderr.fd, chalk.red.bold(`Caught exception: ${err}\n`));
  process.exit(-1);
}

if (args.i) myReadableFileStream = fs.createReadStream(
  path.join(path.dirname(__filename), args.i)
);
if (args.o) myWritableFileStream = fs.createWriteStream(
  path.join(path.dirname(__filename), args.o)
);
const stdInReadableStream = process.stdin;
const stdOutWritableStream = process.stdout;

process.on("uncaughtException", err => {
  console.error("err.stack: " + chalk.red.dim(err.stack));
  fs.writeSync(process.stderr.fd, chalk.red.bold(`Caught exception: ${err}\n`));
});

const inputStream = args.i ? myReadableFileStream : stdInReadableStream;
const outputStream = args.o ? myWritableFileStream : stdOutWritableStream;

const myTransformStream = new CaesarCipherTransform(args.s, args.a);

inputStream.pipe(myTransformStream).pipe(outputStream);
