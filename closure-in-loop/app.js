for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 2000);
}

// Var -> hoisting -> vòng lặp for chạy xong tới 5 rồi mới log ra -> lúc này i đã = 5
// Đoạn code trên = với đoạn bên dưới như sau

var j;
for (j = 0; j < 5; j++) {
  setTimeout(function () {
    console.log(j);
  }, 2000);
}

// Vậy với vấn đề như trên thì giải quyết như nào
// -> Chuyển thành dùng let do let cũng giống var nhưng không bị hoisting vậy thôi, biến let scope của nó sẽ nằm
// trọn vẹn trong vòng lặp for

for (let k = 0; k < 5; k++) {
  setTimeout(function () {
    console.log(k);
  }, 2000);
}

// scope của let thay dổi sau mỗi lần lặp
