module.exports = function multiply(first, second) {
  let aa = first.split('').reverse();
  let bb = second.split('').reverse();

  let stack = [];

  for (let i = 0; i < aa.length; i++) {
    for (let j = 0; j < bb.length; j++) {
      let m = aa[i] * bb[j];
      stack[i + j] = (stack[i + j]) ? stack[i + j] + m : m;
    }
  }

  for (let i = 0; i < stack.length; i++) {
    let num = stack[i] % 10;
    let move = Math.floor(stack[i] / 10);
    stack[i] = num;

    if (stack[i + 1])
      stack[i + 1] += move;
    else if (move != 0)
      stack[i + 1] = move;
  }


  return stack.reverse().join('');
};
