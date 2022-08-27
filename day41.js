// Nuclear Missile Manager https://www.codewars.com/kata/567ed5db4089538eea000010/train/javascript
function launchAll(launchMissile) {
  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      launchMissile(i);
    }, i * 1000);
  }
}
// [JEDI LEVEL] The Supermarket Queue  https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript
function queueTime(customers, n) {
  let queue = Array(n).fill(0);
  for (let customer of customers) {
    let minIdx = queue.indexOf(Math.min(...queue));
    queue[minIdx] += customer;
  }
  return Math.max(...queue);
}
