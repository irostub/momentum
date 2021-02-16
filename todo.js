const TODO_CONTAINER = document.querySelector(".js-todo");
const input = TODO_CONTAINER.querySelector("input");
const todoForm = TODO_CONTAINER.querySelector("form");

let todoList = [];

function handleSubmit(e) {
  e.preventDefault();
  addTodo(input.value);
  saveTodos();
  input.value = "";
}

function addTodo(text) {
  const ul = TODO_CONTAINER.querySelector(".todos");
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.id = todoList.length;
  span.innerText = text;
  button.innerText = "delete";

  button.addEventListener("click", removeTodo);

  li.appendChild(span);
  li.appendChild(button);

  ul.appendChild(li);

  todoList = todoList.concat({ id: todoList.length, message: text });
}

function removeTodo(e) {
  todoList = todoList.filter((todo) => todo.id !== parseInt(e.target.parentNode.id));
  e.target.parentNode.remove();
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
}

init();
