// #19: Methods of String object--toUpperCase() toLowerCase() and replace()
// http://www.codewars.com/kata/5728203b7fc662a4c4000ef3
function alienLanguage(str) {
  const arr = str.toUpperCase().split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, -1) + arr[i].slice(-1).toLowerCase();
  }
  return arr.join(" ");
}
// #20: Methods of String object--charAt() charCodeAt() and fromCharCode()
// http://www.codewars.com/kata/57284d23e81185ae6200162a
function topSecret(str) {
  const chars = str.split("");
  for (let i = 0; i < chars.length; i++) {
    if (chars[i].charCodeAt() < 65) continue;
    if (chars[i].charCodeAt() > 122) continue;
    chars[i] = String.fromCharCode(chars[i].charCodeAt() - 3);
    if (chars[i] == "_") chars[i] = "y";
    if (chars[i] == "^") chars[i] = "x";
  }
  return chars.join("");
}
//question1: The top secret file number is...
answer1 = "3879";
//question2: Super agent's name is...
answer2 = "hyFEBg";
//question3: He stole the treasure is...
answer3 = "Marie's husband";

// #21: Methods of String object--trim() and the string template
// http://www.codewars.com/kata/5729b103dd8bac11a900119e
function fiveLine(s) {
  let noSpace = s.trim();
  return `${noSpace}\n${noSpace.repeat(2)}\n${noSpace.repeat(
    3
  )}\n${noSpace.repeat(4)}\n${noSpace.repeat(5)}`;
}
