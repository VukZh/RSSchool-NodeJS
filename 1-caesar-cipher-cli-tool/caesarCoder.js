const caesarCoder = (
  str,
  arrUpOriginal,
  arrLowOriginal,
  arrUpCrypto,
  arrLowCrypto
) => {
  let res = Uint8Array.from(str);
  for (let index = 0; index < str.length; index++) {
    let tmp = str[index];
    let indexU = arrUpOriginal.indexOf(tmp);
    let indexL = arrLowOriginal.indexOf(tmp);
    if (indexU !== -1) {
      tmp = arrUpCrypto[indexU];
    } else if (indexL !== -1) {
      tmp = arrLowCrypto[indexL];
    }
    res[index] = tmp.toLocaleString();
  }
  return res;
};
module.exports = caesarCoder;
