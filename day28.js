// Function within a function http://www.codewars.com/kata/a-function-within-a-function
function always(n) {
  return function () {
    return n;
  };
}

// Pure function https://www.codewars.com/kata/59bdbe9d46038724ca0000b9/train/javascript
const state = {
  modifier: 2,
};
function solution(arr, options) {
  return arr.map((el) => el + options.modifier * 2);
}
