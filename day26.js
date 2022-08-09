// Sort with Arrow Functions https://www.codewars.com/kata/sort-with-arrow-functions
const OrderPeople = (people) => people.sort((a, b) => a.age - b.age);
// Moving Zeros To The End https://www.codewars.com/kata/52597aa56021e91c93000cb0/
function moveZeros(arr) {
  const res = arr.filter((el) => el !== 0);
  const n = arr.length - res.length;
  for (let i = 0; i < n; i++) {
    res.push(0);
  }
  return res;
}
