// Class
class Person {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
}

const person1 = new Person("Khoi");
console.log(person1.name);
person1.name = "Tofu";
console.log(person1.name);

// Class expression
let Student = class {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
};

const Tofu = new Student("Dang Khoi");
console.log(Tofu.name);
function company(aClass) {
  return new aClass();
}

let hello = company(
  class {
    sayHello() {
      console.log("Hello");
    }
  }
);

hello.sayHello();
