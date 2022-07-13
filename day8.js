// Number object and its properties http://www.codewars.com/kata/5722fd3ab7162a3a4500031f
function whatNumberIsIt(n) {
  if (n == Number.MAX_VALUE) return "Input number is Number.MAX_VALUE";
  if (n == Number.POSITIVE_INFINITY)
    return "Input number is Number.POSITIVE_INFINITY";
  if (n == Number.MIN_VALUE) return "Input number is Number.MIN_VALUE";
  if (n == Number.NEGATIVE_INFINITY)
    return "Input number is Number.NEGATIVE_INFINITY";
  if (isNaN(n)) return "Input number is Number.NaN";
  else return "Input number is " + n;
}
// Methods of Number object--toString() and toLocaleString(): https://www.codewars.com/kata/57238ceaef9008adc7000603
function colorOf(r, g, b) {
  r = r.toString(16);
  r.length == 1 ? (r = "0" + r) : r;
  g = g.toString(16);
  g.length == 1 ? (g = "0" + g) : g;
  b = b.toString(16);
  b.length == 1 ? (b = "0" + b) : b;
  return "#" + r + g + b;
}
// Methods of Number object--toFixed(), toExponential() and toPrecision() http://www.codewars.com/kata/57256064856584bc47000611
function howManySmaller(arr, n) {
  return arr.filter((el) => el.toFixed(2) < n).length;
}
