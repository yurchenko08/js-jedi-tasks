// #30: methods of arrayObject---reduce() and reduceRight() http://www.codewars.com/kata/573156709a231dcec9000ee8
function tailAndHead(arr) {
  const result = arr.reduce((a, b, i) => {});
  return result;
}

// #31: methods of arrayObject---isArray() indexOf() and toString() http://www.codewars.com/kata/5732b0351eb838d03300101d
function blackAndWhite(arr) {
  if (!Array.isArray(arr)) return "It's a fake array";
  return arr.indexOf(5) != -1 && arr.indexOf(13) != -1
    ? "It's a black array"
    : "It's a white array";
}
//#36: methods of Math -- random()   https://www.codewars.com/kata/5735956413c2054a680009ec
function rndCode() {
  const symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*"];
  let code = "";
  for (let i = 0; i < 2; i++) {
    code += String.fromCharCode(~~(12 * Math.random() + 65));
  }
  for (let i = 0; i < 4; i++) {
    code += String.fromCharCode(~~(10 * Math.random() + 48));
  }
  for (let i = 0; i < 2; i++) {
    code += symbols[~~(symbols.length * Math.random())];
  }
  return code;
}
console.log(rndCode());
