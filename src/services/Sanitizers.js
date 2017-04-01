exports.number = function number(val, min, max) {
  
  val = parseInt(val, 10);

  if (!val) {
    val = 0;  
  }
  
  if (val < min) {
    return min;
  }

  if (val > max) {
    return max;
  }
  
  return val;
}

exports.letters = function letters(letter, validLetters, defaultLetter) {
  letter = letter.toUpperCase()
  defaultLetter = defaultLetter.toUpperCase()

  return validLetters.includes(letter) ? letter : defaultLetter;
}