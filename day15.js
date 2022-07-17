// #22: Unlock new skills--Arrow function,spread operator and deconstruction
// http://www.codewars.com/kata/572ab0cfa3af384df7000ff8
function shuffleIt(arr, ...rest) {
  for (const el of rest) {
    const a = el[0];
    const b = el[1];
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }
  return arr;
}
// loopArray https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50/
function loopArr(arr, direction, steps) {
  for (let i = 0; i < steps; i++) {
    if (direction == "left") arr.push(arr.shift());
    if (direction == "right") arr.unshift(arr.pop());
  }
  return arr;
}
// #23: methods of arrayObject---push(), pop(), shift() and unshift()
// http://www.codewars.com/kata/572af273a3af3836660014a1
function infiniteLoop(arr, d, n) {
  for (let i = 0; i < n; i++) {
    if (d == "left") {
      arr[0].push(arr[1].shift());
      arr[1].push(arr[2].shift());
      arr[2].push(arr[0].shift());
    }
    if (d == "right") {
      arr[0].unshift(arr[2].pop());
      arr[1].unshift(arr[0].pop());
      arr[2].unshift(arr[1].pop());
    }
  }
  return arr;
}
