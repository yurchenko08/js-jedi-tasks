// Syntax task https://www.codewars.com/kata/is-this-my-tail/train/javascript
function correctTail(body, tail) {
  return body[body.length - 1] === tail;
}

// Do I get a bonus https://www.codewars.com/kata/56f6ad906b88de513f000d96
function bonusTime(salary, bonus) {
  return bonus ? "\u00A3" + salary * 10 : "\u00A3" + salary;
}
// Automorphic number https://www.codewars.com/kata/5a58d889880385c2f40000aa
function automorphic(n) {
  const square = Math.pow(n, 2).toString();
  if (n == square[square.length - 1]) return "Automorphic";
  if (n == square.slice(-n.toString().length)) return "Automorphic";
  else return "Not!!";
}
