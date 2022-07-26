// #37: Unlock new weapon---RegExp Object http://www.codewars.com/kata/5735e39313c205fe39001173
function countAnimals(animals, count) {
  const result = [];
  for (let i = 0; i < count.length; i++) {
    result.push((animals.match(new RegExp(count[i], "g")) || []).length);
  }
  return result;
}

// #38: Regular Expression--""^"",""$"", ""."" and test() http://www.codewars.com/kata/573975d3ac3eec695b0013e0
function findSimilarity(str, word) {
  const reg = word
    .replace(/./g, ".")
    .replace(/^./, word[0])
    .replace(/.$/, word.slice(-1));
  return str
    .split(" ")
    .filter((el) => new RegExp("^" + reg + "$").test(el))
    .join(" ");
}
