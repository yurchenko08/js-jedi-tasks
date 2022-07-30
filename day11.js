// Playing with Sets : Equal or Not ? https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript
function areEqual(s1, s2) {
  if (s1.size != s2.size) return false;
  for (value of s1) {
    if (!s2.has(value)) return false;
  }
  return true;
}

function notEqual(s1, s2) {
  return !areEqual(s1, s2);
}
// Operations with Sets https://www.codewars.com/kata/5609fd5b44e602b2ff00003a/train/javascript
function process2Arrays(arr1, arr2) {
  const a = [...new Set(arr1)];
  const b = [...new Set(arr2)];
  const c1 = a.filter((el) => b.includes(el)).length;
  const c3 = a.filter((el) => !b.includes(el)).length;
  const c4 = b.filter((el) => !a.includes(el)).length;
  const c2 = c3 + c4;
  return [c1, c2, c3, c4];
}
