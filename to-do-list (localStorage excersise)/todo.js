window.addEventListener("load", function () {
  const toDoForm = document.querySelector(".todo-form");
  const toDoList = document.querySelector(".todo-list");
  let toDos =
    localStorage.length > 0 ? JSON.parse(localStorage.getItem("todoList")) : [];
  if (Array.isArray(toDos) && toDos.length >= 0) {
    [...toDos].forEach((item) => createToDoItem(item));
  }
  function createToDoItem(toDoVal) {
    const todoItemTemplate = `
      <div class="todo-item">
              <span class="todo-text">${toDoVal}</span>
              <i class="fa-solid fa-trash todo-remove"></i>
          </div>
      `;
    toDoList.insertAdjacentHTML("beforeend", todoItemTemplate);
  }
  toDoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Lấy ra value từ input
    const toDoVal = this.elements["todo"].value;
    createToDoItem(toDoVal);
    // save to localStorage
    // Mỗi lần add một cái sẽ ra một cái -> không thể lưu từng biến được mà phải lưu thành mảng
    toDos.push(toDoVal);
    // console.log("log ~ toDos", toDos);
    localStorage && localStorage.setItem("todoList", JSON.stringify(toDos));
    // console.log(toDoVal);
    this.elements["todo"].value = "";
  });
});
