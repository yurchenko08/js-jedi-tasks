// Object Prototypes https://www.codewars.com/kata/js-prototypes-module-number-1-object-prototype
const obj = {
  description: "TODO: GIVE ME A DESCRIPTION",
};
widget.__proto__ = obj;
gadget.__proto__ = obj;
thingamabob.__proto__ = obj;
// Class-Like Objects https://www.codewars.com/kata/javascript-class-like-objects
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  toString() {
    return this.name + " is a " + this.type;
  }
}
// [JEDI LEVEL] Power of bind http://www.codewars.com/kata/power-bind
