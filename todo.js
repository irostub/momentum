const TODO_CONTAINER = document.querySelector(".js-todo");
const input = TODO_CONTAINER.querySelector("input");
const todoForm = TODO_CONTAINER.querySelector("form");
const button = TODO_CONTAINER.querySelector("button");

let todoList = [];
let toggleSlide = false;

function handleSubmit(e) {
  e.preventDefault();
  addTodo(input.value);
  saveTodos();
  input.value = "";
}

function handleClick() {
  const clock = document.querySelector(".js-clock");
  const name = document.querySelector(".js-name");
  if (toggleSlide) {
    TODO_CONTAINER.classList.add("slidedown");
    TODO_CONTAINER.classList.remove("slideup");
    clock.classList.add("fadein");
    clock.classList.remove("fadeout");
    name.classList.add("fadein");
    name.classList.remove("fadeout");
    toggleSlide = !toggleSlide;
  } else {
    TODO_CONTAINER.classList.add("slideup");
    TODO_CONTAINER.classList.remove("slidedown");
    clock.classList.add("fadeout");
    clock.classList.remove("fadein");
    name.classList.add("fadeout");
    name.classList.remove("fadein");
    toggleSlide = !toggleSlide;
  }
}

function addTodo(text) {
  const ul = TODO_CONTAINER.querySelector(".todos");
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.id = todoList.length;
  span.innerText = text;
  button.innerHTML = `<img src="./x.svg"/>`;

  button.addEventListener("click", removeTodo);

  li.appendChild(span);
  li.appendChild(button);

  ul.appendChild(li);

  todoList = todoList.concat({ id: todoList.length, message: text });
}

function removeTodo(e) {
  console.log(e.target.parentNode.parentNode);
  todoList = todoList.filter((todo) => todo.id !== parseInt(e.target.parentNode.parentNode.id));
  e.target.parentNode.parentNode.remove();
  saveTodos();
}

function saveTodos() {
  return localStorage.setItem("todoList", JSON.stringify(todoList));
}

function loadTodos() {
  const todos = JSON.parse(localStorage.getItem("todoList"));
  if (todos !== null) {
    todos.forEach((todo) => {
      addTodo(todo.message);
    });
  }
}

function init() {
  todoForm.addEventListener("submit", handleSubmit);
  loadTodos();
  button.addEventListener("click", handleClick);
}

init();
