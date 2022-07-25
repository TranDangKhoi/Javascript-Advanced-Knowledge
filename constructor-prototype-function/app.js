let student = {
  name: "Khoi",
  age: 19,
};

// Muốn tạo thêm nhiều học sinh nữa thì lại phải viết
// hàng đống dòng tạo object nữa -> rất tốn thời gian
// mà code lại còn không hiệu quả

// Nên sử dụng Constructor function

function Student(name, age) {
  this.name = name;
  this.age = age;

  this.getName = function () {
    return this.name;
  };
}

let firstStudent = new Student("Tran", 19);
let secondStudent = new Student("Minh", 20);
console.log(firstStudent.getName());
console.log(secondStudent.getName());

// Prototype
let str = "abc";
// str ở đây có thg cha là String.prototype nên sử dụng được method toUpperCase của thằng cha (String)
str.toUpperCase();

String.prototype.duplicate = function () {
  return this + this;
};

console.log(str.duplicate());

function Girl() {
  this.cook = function () {
    console.log("Your girlfriend can cook");
  };
}

Girl.prototype.sing = function () {
  console.log("Your girlfriend can sing");
};
Object.prototype.makeSandwich = function () {
  console.log("Make sandwich");
};
let Jane = new Girl();
Jane.cook();

// Jane kế thừa luôn prototype và nhận đc function sing
Jane.sing();

// Vì object là bố của tất cả các thằng khác nên khi viết một function cho prototype của Object
// Thì mọi object khác cũng sẽ thừa hưởng tính năng đó
Jane.makeSandwich(); // Ouput: Make sandwich
