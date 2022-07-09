// Char Codes Calculation - https://www.codewars.com/kata/57f75cc397d62fc93d000059
function calc(x) {
  const total1 = x
    .split("")
    .map((el) => el.charCodeAt(el))
    .join("");
  console.log(total1);
  const total2 = total1.replace(/7/g, 1);
  const sum1 = total1.split("").reduce((a, b) => a + b);
  const sum2 = total2.split("").reduce((a, b) => a + b);
  console.log(total1);
  console.log(sum1);
  console.log(sum1 - sum2);
}

calc("ifkhchlhfd");
