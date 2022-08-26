// Generators #1 https://www.codewars.com/kata/basics-generators-number-1/javascript
function* generator() {
  let i = 1;
  while (true) {
    const value = yield i;
    if (value === undefined) i++;
    else i = value;
  }
}
