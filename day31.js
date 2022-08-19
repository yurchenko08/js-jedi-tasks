// Singleton pattern https://www.codewars.com/kata/singleton-pattern/train/javascript
class Singleton {
  constructor() {
    if (Singleton.instance) return Singleton.instance;
    Singleton.instance = this;
  }
}

// [JEDI LEVEL] Simple Web Framework #1: Create a basic router https://www.codewars.com/kata/588a00ad70720f2cd9000005/train/javascript
