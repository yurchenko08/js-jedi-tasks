// Maximum Multiple https://www.codewars.com/kata/maximum-multiple/train/javascript
function maxMultiple(divisor, bound) {
  const arr = [];
  for (let n = 1; n <= bound; n++) {
    if (n % divisor == 0 && n < Math.pow(bound, 2) && n > 0) arr.push(n);
  }
  return Math.max.apply(null, arr);
}

// Is he gonna survive? https://www.codewars.com/kata/is-he-gonna-survive/train/javascript
function hero(bullets, dragons) {
  return bullets >= dragons * 2;
}

// 5 without numbers: https://www.codewars.com/kata/59441520102eaa25260000bf
function unusualFive() {
  return "abcde".length;
}
