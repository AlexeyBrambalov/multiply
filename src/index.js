module.exports = function multiply(first, second) {
  let firstNum, secNumber, result;

  firstNum = BigInt(first);
  secNumber = BigInt(second);
  result = firstNum * secNumber;

  result = result.toString();
  return result;
};
