// Generators #2 https://www.codewars.com/kata/5637ead70013386e30000027/
function* generator(a) {
  let b = 0;
  while (true) {
    b++;
    yield `${a} x ${b} = ${a * b}`;
  }
}
