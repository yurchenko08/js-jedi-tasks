// How new works https://www.codewars.com/kata/how-new-works
const myObj = { __proto__: MyObject.prototype };
MyObject.call(myObj);

// Replicate new http://www.codewars.com/kata/replicate-new
function nouveau(Constructor) {
  const args = Array.prototype.slice.call(arguments, 1);
  const obj = Object.create(Constructor.prototype);
  const objReturn = Constructor.apply(obj, args);
  if (
    (typeof objReturn === "object" || typeof objReturn === "function") &&
    objReturn !== null
  )
    return objReturn;
  return obj;
}
