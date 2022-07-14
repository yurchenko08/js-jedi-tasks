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
