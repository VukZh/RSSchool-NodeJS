const caesarCoder = (
  str,
  arrUpOriginal,
  arrLowOriginal,
  arrUpCrypto,
  arrLowCrypto
) => {
  let res = '';
  for (let index = 0; index < str.length; index++) {
    let tmp = String.fromCharCode(str[index]);

    let indexU = arrUpOriginal.indexOf(tmp);
    let indexL = arrLowOriginal.indexOf(tmp);
    if (indexU !== -1) {
      tmp = arrUpCrypto[indexU];
    } else if (indexL !== -1) {
      tmp = arrLowCrypto[indexL];
    }
    res += tmp;
  }
  return res;
};
module.exports = caesarCoder;
