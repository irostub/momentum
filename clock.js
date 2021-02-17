const CLOCK_CONTAINER = document.querySelector(".js-clock");

function getTime() {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  CLOCK_CONTAINER.innerText = `${hour < 10 ? `0${hour}` : `${hour}`}:${
    min < 10 ? `0${min}` : `${min}`
  }:${sec < 10 ? `0${sec}` : `${sec}`}`;
}

function init() {
  getTime();
  return setInterval(getTime, 1000);
}

init();
