const WEATHER_API_KEY = "843eb06e7aca8263a37e1fbeee6eb3b1";
const WEATHER_CONTAINER = document.querySelector(".js-weather");

function init() {
  loadCoord();
}

function getWeather(lat, lon) {
  const weather = {
    location: "",
    temp: "",
    weather: "",
  };

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=843eb06e7aca8263a37e1fbeee6eb3b1&units=metric`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      weather.temp = data.main.temp;
      weather.location = data.name.split(" ")[0];
      weather.weather = data.weather[0].main;
      displayWeather(weather);
    });
}

function displayWeather(weather) {
  console.log(weather);
  const h4loc = document.createElement("h4");
  const h4temp = document.createElement("h4");
  const h4weather = document.createElement("h4");

  h4loc.innerText = weather.location;
  h4temp.innerText = weather.temp;
  h4weather.innerText = weather.weather;

  WEATHER_CONTAINER.appendChild(h4loc);
  WEATHER_CONTAINER.appendChild(h4temp);
  WEATHER_CONTAINER.appendChild(h4weather);
}

function saveCoord(coord) {
  localStorage.setItem("coord", JSON.stringify(coord));
}

function loadCoord() {
  const coord = localStorage.getItem("coord");
  if (coord === null) {
    getLocation();
  } else {
    const parseCoord = JSON.parse(coord);
    getWeather(parseCoord.lat, parseCoord.lon);
    return;
  }
}

function handleGeoSucces(position) {
  const coord = {
    lat: "",
    lon: "",
  };
  coord.lat = position.coords.latitude;
  coord.lon = position.coords.longitude;
  saveCoord(coord);
  getWeather(coord.lat, coord.lon);
}

function getLocation() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, () => console.log("cant get location"));
}

init();
