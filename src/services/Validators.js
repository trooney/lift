function isNumber(n) {
  return !isNaN(n)
}

function toNumber(n) {
  if (isNumber(n)) {
    return +n;
  } else {
    return 0;
  }
}

exports.isNumber = isNumber
exports.toNumber = toNumber