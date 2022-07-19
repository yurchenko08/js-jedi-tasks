// #24: methods of arrayObject---splice() and slice() http://www.codewars.com/kata/572cb264362806af46000793
function threeInOne(arr) {
  const sum = [];
  for (let i = 0; i <= arr.length; i += 3) {
    sum.push(arr[i] + arr[i + 1] + arr[i + 2]);
  }
  return sum;
}
// #25: methods of arrayObject---reverse() and sort() http://www.codewars.com/kata/572df796914b5ba27c000c90
function sortIt(arr) {
  const result = arr.slice();
  result.sort((a, b) => {
    const tempA = arr.filter((el) => el == a).length;
    const tempB = arr.filter((el) => el == b).length;
    if (tempA === tempB) return b - a;
    else if (tempA > tempB) return 1;
    else return -1;
  });
  return result;
}

// #26: methods of arrayObject---map() http://www.codewars.com/kata/572fdeb4380bb703fc00002c
function isolateIt(arr) {
  let result = arr.map(function (el) {
    return el.slice(0, el.length / 2) + "|" + el.slice(-el.length / 2);
  });
  return result;
}
