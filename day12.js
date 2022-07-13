// Word to Binary - https://www.codewars.com/kata/59859f435f5d18ede7000050
function wordToBin(str) {
  const array = str
    .split("")
    .map((el) => el.charCodeAt().toString(2))
    .map((el) => "0" + el);
  return array;
}
// Char Codes Calculation - https://www.codewars.com/kata/57f75cc397d62fc93d000059
function calc(x) {
  let total1 = [];
  x = x.split("");
  for (let i = 0; i < x.length; i++) {
    total1.push(x[i].charCodeAt());
  }
  total1 = total1.join("");
  let total2 = total1.replace(/7/g, 1);
  total1 = total1.split("");
  total2 = total2.split("");
  return total1.reduce((a, b) => +a + +b) - total2.reduce((a, b) => +a + +b);
}
