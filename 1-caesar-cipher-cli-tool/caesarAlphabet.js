function caesarAlphabet(step, arr, flag) {
  let calcAlphabet;
  let stepCrypt;

  if (step < 0) step = Math.abs(26 + step);
  if (step > 25) step = step % 26;
  if (flag === 'decode') {
    stepCrypt = step;
  } else if (flag === 'encode') {
    stepCrypt = Math.abs(step - 26);
  } else throw new Error('action option is incorrect (encode / decode) !!!');
  calcAlphabet = arr.map(function(el, index, arr) {
    return index < stepCrypt
      ? arr[arr.length + index - stepCrypt]
      : arr[index - stepCrypt];
  });

  return calcAlphabet;
}
module.exports = caesarAlphabet;
