const originalEnUp = require('./engUp');
const originalEnLower = require('./engLower');
const caesarAlphabet = require('./caesarAlphabet');
const caesarCoder = require('./caesarCoder');


const {Transform} = require('stream');

class CaesarCipherTransform extends Transform {
    constructor(step, flag) {
        super();
        this.step = step;
        this.flag = flag;       
        this.cryptoEnUp = caesarAlphabet(step, originalEnUp, flag);
        this.cryptoEnLower = caesarAlphabet(step, originalEnLower, flag);
        
        console.log('step ' + this.step)
        console.log('flag ' + this.flag)
    }
    
    _transform(data, encode, cb) {
        let transformData = caesarCoder(data, originalEnUp, originalEnLower, this.cryptoEnUp, this.cryptoEnLower);

        this.push(transformData);
        cb();
    }
}

module.exports = CaesarCipherTransform;
