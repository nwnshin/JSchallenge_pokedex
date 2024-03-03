const API_KEY = "c33eb36c6e095c731a46faaa02b0c957";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp} °C`;
      city.innerText = data.name;
    }); //network > fetch에서 url결과확인가능
}

function onGeoError() {
  alert("Can't find you. Can't find your weather.");
}

// 브라우저에 위치좌표 요청
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
