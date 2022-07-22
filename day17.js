// #27: methods of arrayObject---filter() http://www.codewars.com/kata/573023c81add650b84000429
function countGrade(scores) {
  return {
    S: scores.filter(function (el) {
      return el == 100;
    }).length,
    A: scores.filter(function (el) {
      return el < 100 && el >= 90;
    }).length,
    B: scores.filter(function (el) {
      return el < 90 && el >= 80;
    }).length,
    C: scores.filter(function (el) {
      return el < 80 && el >= 60;
    }).length,
    D: scores.filter(function (el) {
      return el < 60 && el >= 0;
    }).length,
    X: scores.filter(function (el) {
      return el == -1;
    }).length,
  };
}

// #28: methods of arrayObject---every() and some() http://www.codewars.com/kata/57308546bd9f0987c2000d07
function mirrorImage(arr) {
  let result = [];
  arr.some((x, i) => {
    let a = x;
    let b = arr[i + 1];
    if (checkPair(b) === a.toString() || checkPair(a) === b.toString())
      return (result = [a, b]);
    if (i == [arr.length - 2]) return (result = [-1, -1]);
  });
  return result;
}

const checkPair = (n) => n.toString().split("").reverse().join("");

// #29: methods of arrayObject---concat() and join() http://www.codewars.com/kata/5731861d05d14d6f50000626
const bigToSmall = (arr) =>
  []
    .concat(...arr)
    .sort((a, b) => b - a)
    .join(">");
