const CLOCK_CONTAINER = document.querySelector(".js-clock");

function getTime() {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  CLOCK_CONTAINER.innerText = `${hour}:${min}:${sec}`;
}

function init() {
  getTime();
  return setInterval(getTime, 1000);
}

init();
