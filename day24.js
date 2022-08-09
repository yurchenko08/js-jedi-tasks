// Duplicate arguments http://www.codewars.com/kata/duplicate-arguments
function solution(...args) {
  const uniques = new Set(args);
  return uniques.size < [...args].length;
}

// Last Argument http://www.codewars.com/kata/last
function last(list) {
  const last = arguments[arguments.length - 1];
  return last[last.length - 1] || last;
}
