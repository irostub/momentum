import module from "./module.js";

const NAME_CONTAINER = document.querySelector(".js-name");

function displayHello() {
  const text = NAME_CONTAINER.querySelector("span");
  const name = localStorage.getItem("name");
  text.innerText = `Hello ${name}!`;
}

function handleSubmit(e) {
  e.preventDefault();
  const input = NAME_CONTAINER.querySelector("input");
  localStorage.setItem("name", input.value);
  e.target.classList.add("hide");
  displayHello();
}

function init() {
  const nameForm = NAME_CONTAINER.querySelector("form");

  if (localStorage.getItem("name") !== null) {
    nameForm.classList.add("hide");
    displayHello();
  }
  nameForm.addEventListener("submit", handleSubmit);
}

init();
