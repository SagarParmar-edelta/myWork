const inputBox = document.querySelector(".todo-input input");
const addTodobtn = document.querySelector(".input-box button");
const listBox = document.querySelector(".list-box");

const CHECK = "fas fa-check-circle";
const UNCHECK = "far fa-circle";
const LINE_THROUGH = "linethrough";

//Event listner
listBox.addEventListener("click", (e) => {
  const item = e.target;

  let getTodos = localStorage.getItem("Todos");
  let arr = [];
  if (getTodos !== null) {
    arr = JSON.parse(localStorage.getItem("Todos"));
  }

  if (item.classList.value === UNCHECK) {
    arr[item.id].done = true;
    item.classList.value = CHECK;
    const todo = item.parentElement;
    todo.querySelector(".todo-text").classList.toggle(LINE_THROUGH);
    localStorage.setItem("Todos", JSON.stringify(arr));
  } else {
    arr[item.id].done = false;
    item.classList.value = UNCHECK;
    const todo = item.parentElement;
    todo.querySelector(".todo-text").classList.toggle(LINE_THROUGH);
    localStorage.setItem("Todos", JSON.stringify(arr));
  }
});

//Button is changed depends on input value
inputBox.onkeyup = () => {
  if (inputBox.value.trim()) {
    addTodobtn.classList.add("active");
  } else {
    addTodobtn.classList.remove("active");
  }
};

//add todo when button pressed & enter key pressed
const addTodo = () => {
  let getTodos = localStorage.getItem("Todos");
  let arr = [];
  if (getTodos !== null) {
    arr = JSON.parse(localStorage.getItem("Todos"));
  }
  arr.unshift({ todo: inputBox.value, done: false });
  localStorage.setItem("Todos", JSON.stringify(arr));
  inputBox.value = "";
  addTodobtn.classList.remove("active");
  showList();
};

document.addEventListener("keyup", (event) => {
  if (event.keyCode == 13) {
    inputBox.value.trim() ? addTodo() : "";
  }
});

//Delete list item
const deleteItem = (index) => {
  let getTodos = localStorage.getItem("Todos");
  let arr = JSON.parse(getTodos);
  arr.splice(index, 1);
  localStorage.setItem("Todos", JSON.stringify(arr));
  showList();
};

//show list of item
const showList = () => {
  let getTodos = localStorage.getItem("Todos");
  let arr = [];
  if (getTodos !== null) {
    arr = JSON.parse(localStorage.getItem("Todos"));
  }
  let listItems = ``;
  arr.forEach((element, index) => {
    let tempcheck = arr[index].done ? CHECK : UNCHECK;
    let tempLineThrough = arr[index].done ? LINE_THROUGH : "";
    listItems += `<li class="todo-item">
                    <i class = "${tempcheck}" id="${index}"></i>
                    <span class = "todo-text ${tempLineThrough}">${element.todo}</span>
                    <i class="fas fa-trash-alt icon-text" onclick="deleteItem(${index})"></i>
                  </li>`;
  });
  listBox.innerHTML = listItems;
};
showList();
