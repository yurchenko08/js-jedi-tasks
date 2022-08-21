// [JEDI LEVEL] Implement own reduce https://www.codewars.com/kata/array-number-reduce/train/javascript
Array.prototype.reduce = function (process, initial) {
  for (let i = 0; i < this.length; i++) {
    if (!initial) {
      initial = this[0];
      continue;
    }
    initial = process(initial, this[i]);
  }
  return initial;
};
// [JEDI LEVEL] Deep freeze https://www.codewars.com/kata/52ed80dfe7bf9ae61d000056
Object.deepFreeze = function (object) {
  const values = Object.values(object);
  values.forEach((el) => {
    if (typeof el === "object") Object.deepFreeze(el);
  });
  return Object.freeze(object);
};
