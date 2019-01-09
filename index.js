const API_KEY = "b0ad7012e63564d7941bfbbeba65f56f"

function handleFormSubmit() {
  let city = document.getElementById('city').value;
  console.log(city);
  fetchCurrentWeather(city);
  fetchFiveDayForecast(city);
}

function fetchCurrentWeather(city) {
  //fetch current weather based on city
  fetch(`https://api.openweathermap.org/data/2.5/weather?APPid=${API_KEY}&q=${city}`)
    .then(resp => resp.json())
    .then(json => displayCurrentWeather(json))
    
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
let currentKelvin = parseInt(json.main.temp,10);
let currentCelsius = currentKelvin - 273.15;
let currentTemp = currentCelsius.toFixed(1);
document.getElementById("temp").innerHTML = `${currentTemp}`;

let lowKelvin = parseInt(json.main.temp_min,10);
let lowCelsius = lowKelvin - 273.15;
let lowTemp = lowCelsius.toFixed(1);
document.getElementById("low").innerHTML = `${lowTemp}`;

let highKelvin = parseInt(json.main.temp_max,10);
let highCelsius = highKelvin - 273.15;
let highTemp = highCelsius.toFixed(1);
document.getElementById("high").innerHTML = `${highTemp}`;

document.getElementById("humidity").innerHTML = `${json.main.humidity}`;

document.getElementById("cloudCover").innerHTML = `${json.clouds.all}`;
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
  fetch(`https://api.openweathermap.org/data/2.5/forecast?APPid=${API_KEY}&q=${city}`)
  .then(resp => resp.json())
  .then(json => displayFiveDayForecast(json))
}


//this bit still needs work
function displayFiveDayForecast(json) {
  console.log(json);
  //render five day forecast data to the DOM using provided IDs and json from API
const aside = document.querySelector('aside')

   for (let slot of json.list) {
     console.log(slot.dt_txt)
     
     aside.innerHTML = `<p>${slot.dt_txt}</p>`
     aside.appendChild

     console.log(slot.main.temp)
     
     console.log(slot.main.humidity)

   }
   
   
   
   
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

//document.addEventListener('DOMContentLoaded', function() {
//document.getElementById(cityForm).addEventListener("submit", handleFormSubmit(event) )
  
//})
