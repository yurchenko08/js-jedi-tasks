// SantaClausable Interface http://www.codewars.com/kata/santaclausable-interface
//Cylon Evolution http://www.codewars.com/kata/cylon-evolution
class Cylon {
  constructor(model) {
    this.model = model;
  }
  attack() {
    return "Destroy all humans!";
  }
}

class HumanSkin extends Cylon {
  constructor(model) {
    super(model);
  }
  infiltrate() {
    return "Infiltrate the colonies";
  }
}
//Call function using apply http://www.codewars.com/kata/write-javascripts-call-function-using-apply
