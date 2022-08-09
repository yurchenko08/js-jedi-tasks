// Anonymous returns http://www.codewars.com/kata/anonymous-returns
const name = "The Window";
const alpha = {
  name: "My Alpha",
  getNameFunc: function () {
    return function () {
      return this.name;
    }.bind(alpha);
  },
};

// Take an Arrow to the knee, Functionally https://www.codewars.com/kata/559f3123e66a7204f000009f/train/javascript
const ArrowFunc = function (arr) {
  return arr.map((el) => String.fromCharCode(el)).join("");
};
