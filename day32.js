// "this"" is a problem - http://www.codewars.com/kata/this-is-a-problem
function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  return (this.name = first + " " + last);
}
// ""this"" is an other problem - https://www.codewars.com/kata/this-is-an-other-problem
class NamedOne {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
  set fullName(str) {
    if (str.split(" ")[0] === undefined || str.split(" ")[1] === undefined)
      return;
    this.firstName = str.split(" ")[0];
    this.lastName = str.split(" ")[1];
  }
}
