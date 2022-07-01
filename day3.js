// #6: Basic data types--Boolean and conditional statements if..else
function trueOrFalse(val){
if (!val) return "false";           
return "true";
}

// #7: if..else and ternary operator http://www.codewars.com/kata/57202aefe8d6c514300001fd
function saleHotdogs(n){
  return n < 5 ? n * 100 : n >= 10 ? n * 90 : n * 95;
}

// #8: Conditional statement--switch http://www.codewars.com/kata/572059afc2f4612825000d8a
function howManydays(month) {
  let days;
  switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    case 2:
      days = 28;
      break;
    default:
      days = 31;
  }
  return days;
}
