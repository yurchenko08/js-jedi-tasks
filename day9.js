// #16: Methods of String object--slice(), substring() and substr() http://www.codewars.com/kata/57274562c8dcebe77e001012
function cutIt(arr) {
  let shortest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < shortest.length) shortest = arr[i];
  }
  return arr.map((el) => el.substr(0, shortest.length));
}
// #17: Methods of String object--indexOf(), lastIndexOf() and search()
// http://www.codewars.com/kata/57277a31e5e51450a4000010
function firstToLast(str, c) {
  if (str.indexOf(c) == -1) return -1;
  if (str.lastIndexOf(c) == str.indexOf(c)) return 0;
  return str.lastIndexOf(c) - str.indexOf(c);
}
// #18: Methods of String object--concat() split() and its good friend join()"
// http://www.codewars.com/kata/57280481e8118511f7000ffa
function splitAndMerge(string, separator) {
  let words = string.split(" ");
  return words.map((el) => el.split("").join(separator)).join(" ");
}
