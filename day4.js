// #9: loop statement --while and do..while http://www.codewars.com/kata/57216d4bcdd71175d6000560
function padIt(str, n) {
  let i = 1;
  while (i <= n) {
    if (i % 2 === 0) {
      str += "*";
    } else {
      str = "*" + str;
    }
    i++;
  }
  return str;
}

// #10: loop statement --for http://www.codewars.com/kata/5721a78c283129e416000999
function pickIt(arr) {
  const odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      odd.push(arr[i]);
    } else {
      even.push(arr[i]);
    }
  }
  return [odd, even];
}

// #11: loop statement --break,continue http://www.codewars.com/kata/5721c189cdd71194c1000b9b
function grabDoll(dolls) {
  const bag = [];
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] == "Hello Kitty" || dolls[i] == "Barbie doll")
      bag.push(dolls[i]);
    else continue;
    if (bag.length == 3) break;
  }
  return bag;
}

// #12: loop statement --for..in and for..of http://www.codewars.com/kata/5722b3f0bd5583cf44001000
function giveMeFive(obj) {
  const arr = [];
  for (const key in obj) {
    if (key.length === 5) {
      arr.push(key);
    }
    if (obj[key].length === 5) {
      arr.push(obj[key]);
    }
  }
  return arr;
}
