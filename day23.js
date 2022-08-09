// Unpacking arguments http://www.codewars.com/kata/unpacking-arguments
function spread(func, args) {
  return func(...args);
}

// For the sake of argument http://www.codewars.com/kata/for-the-sake-of-argument
function numbers(...arr) {
  const filtered = arr.filter((el) => typeof el === "number");
  return arr.length === filtered.length;
}
