// Check your arrows https://www.codewars.com/kata/559f860f8c0d6c7784000119/train/javascript
function anyArrows(arrows) {
  return arrows.some((el) => el.damaged !== true);
}

// Currying functions: multiply all elements in an array https://www.codewars.com/kata/586909e4c66d18dd1800009b/train/javascript
const multiplyAll = (arr) => (n) => arr.map((el) => el * n);