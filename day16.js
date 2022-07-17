// #24: methods of arrayObject---splice() and slice() http://www.codewars.com/kata/572cb264362806af46000793
function threeInOne(arr) {
  const sum = [];
  for (let i = 0; i <= arr.length; i += 3) {
    sum.push(arr[i] + arr[i + 1] + arr[i + 2]);
  }
  return sum;
}
// #25: methods of arrayObject---reverse() and sort() http://www.codewars.com/kata/572df796914b5ba27c000c90
