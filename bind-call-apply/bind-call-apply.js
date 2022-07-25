//1. Bind
const student2 = {
  firstName: "Tran",
  lastName: "Dang Khoi",
  fullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

const student3 = {
  firstName: "Mai",
  lastName: "Nam Hai",
  fullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

const button = document.querySelector(".button");
button.addEventListener("click", student2.fullName.bind(student3)); // thay đổi function fullname của thằng student2 thành function fullname của thằng student3

const $ = document.querySelector.bind(document); // thay đổi function document.querySelect của thg document thành $

console.log($(".button"));

function log(level, time, msg) {
  console.log(`${level} ${time} ${msg}`);
}

// function logErrToday(msg) {
//   log("Error", "Today", msg);
// }

// logErrToday("Server OK!");

const logErrToday = log.bind(null, "Error", "Today");
logErrToday("Server OK!");

// 2. Call and apply
// Call dùng như nào
// fn.call(this, arg1, arg2, ...)

const person = {
  name: "Khoi",
  job: "Front-End Developer",
};

function sayHello(arg1, arg2) {
  console.log(`${arg1} ${arg2} ${this.name} - a ${this.job}`);
}
// Bind là tạo ra một hàm mới sau đó các bạn có thể sử dụng nó ở đâu đó
// Call thì truyền vào object + arguments và khi gọi ra thì nó chạy luôn
sayHello.call(person, "Hi", "good morning");
// Apply thì truyền vào object + array trong array là các arguments và khi gọi thì nó chạy luôn
sayHello.apply(person, ["Hi", "good morning"]);
// Giả dụ giờ muốn truyền thêm phần tử vào tham số
const arr = [1, 2, 3];
const arr2 = [2, 3, 7];
arr.push.apply(arr, arr2);
console.log(arr);
