
const apiKey = "efa9e80a20c8713bdbb5ae4e1f3b29db";
const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?appid=" + apiKey + "&units=metric";
const searchBox = document.querySelector(".search select");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherIcon2 = document.querySelector(".weather-icon2");
const weatherIcon3 = document.querySelector(".weather-icon3");
const weatherIcon4 = document.querySelector(".weather-icon4");
const weatherIcon5 = document.querySelector(".weather-icon5");
var selectElement = document.querySelector('select');
var inputElement = document.querySelector('input');
var switchButton = document.querySelector('.switch');


function getWeather(city) {
    return new Promise((resolve, reject) => {
        fetch(apiUrl + `&q=${city}`)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

async function checkWeather(city) {
    
    var data = await getWeather(city);


    document.querySelector(".city").innerHTML = data.city.name;
    document.querySelector(".temp").innerHTML = "(" + Math.round(data.list[0].main.temp) + "°c)";
    document.querySelector(".humidity").innerHTML = data.list[0].main.humidity + "%";
    var weatherArr = ["", "", "", "", "", "", "", ""]
    for (let i = 0; i < 5; i++) {
        if (data.list[i * 8].weather[0].main == "Clouds") {
            weatherArr[i] = "assets/images/clouds.png";
        }
        else if (data.list[i * 8].weather[0].main == "Clear") {
            weatherArr[i] = "assets/images/clear.png";
        }
        else if (data.list[i * 8].weather[0].main == "Rain") {
            weatherArr[i] = "assets/images/rain.png";
        }
        else if (data.list[i * 8].weather[0].main == "Drizzle") {
            weatherArr[i] = "assets/images/drizzle.png";
        }
        else if (data.list[i * 8].weather[0].main == "Mist") {
            weatherArr[i] = "assets/images/mist.png";
        }
    }
    weatherIcon.src = weatherArr[0];
    weatherIcon2.src = weatherArr[1];
    weatherIcon3.src = weatherArr[2];
    weatherIcon4.src = weatherArr[3];
    weatherIcon5.src = weatherArr[4];

    document.querySelector(".temp2").innerHTML = "(" + Math.round(data.list[8].main.temp) + "°c)";
    document.querySelector(".temp3").innerHTML = "(" + Math.round(data.list[16].main.temp) + "°c)";
    document.querySelector(".temp4").innerHTML = "(" + Math.round(data.list[24].main.temp) + "°c)";
    document.querySelector(".temp5").innerHTML = "(" + Math.round(data.list[32].main.temp) + "°c)";

    document.querySelector(".weather").style.display = "block";

}
searchBox.addEventListener("change", () => {
    const selectedCity = searchBox.value;
    checkWeather(selectedCity);
})

inputElement.addEventListener("mousedown", () => {
    const selectedCity = inputElement.value;
    if(selectedCity.length != 0){
    checkWeather(selectedCity);
    }
})

switchButton.addEventListener('click', function() {
    if (selectElement.style.display === 'none') {
      selectElement.style.display = 'block';
      inputElement.style.display = 'none';
    } else {
      selectElement.style.display = 'none';
      inputElement.style.display = 'block';
    }
  });
