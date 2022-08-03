// #41: Regular Expression--"""" http://www.codewars.com/kata/573e6831e3201f6a9b000971
const regex = /\b(\S)(\S?)(\S?)\S?\3\2\1\b/g;

// #42: Regular Expression--(?:), (?=) and (?!) http://www.codewars.com/kata/573fb9223f9793e485000453
const regex = /(\d)(?=(\d{3})+$)/g;
function addCommas(money, reg) {
  return money.replace(reg, (x) => x + ",");
}
