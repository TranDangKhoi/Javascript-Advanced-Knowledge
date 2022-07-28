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

// Static method
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(a, b) {
    return a.date - b.date;
  }
}

let articles = [
  new Article("HTML", new Date(2021, 1, 1)),
  new Article("CSS", new Date(2021, 11, 4)),
  new Article("JS", new Date(2021, 5, 11)),
];

// articles.sort((a,b) =>)
articles.sort(Article.compare);
console.log(articles[0].title);

// const article1 = new Article
// article1.compare
