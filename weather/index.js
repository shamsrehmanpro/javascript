let searchBox = document.querySelector('input');
let searchBtn =  document.querySelector('i');
let degree = document.querySelector('.degree');
let cityName = document.querySelector('.cityName');
let humidityPercent = document.querySelector('.humiditypercent');
let windKilometer = document.querySelector('.kilometer');
let weatherInfo = document.querySelector('.weather-info');
let weatherImg = document.querySelector('.weatherImg');

async function checkWeather(){
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + searchBox.value + '&units=metric&appid=37af92007fa9d13f5d2061c4f971d736';
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    degree.innerHTML =Math.floor(data.main.temp) + ' °C';
    cityName.innerHTML = data.name;
    humidityPercent.innerHTML = data.main.humidity + ' %';
    windKilometer.innerHTML = data.wind.speed + ' Km/h';

    if(data.weather[0].main === 'Clouds'){
        weatherImg.src = './images/clouds.png';
    }
    else if(data.weather[0].main === 'Clear'){
        weatherImg.src = './images/clear.png';
    }
    else if(data.weather[0].main === 'Drizzle'){
        weatherImg.src = './images/drizzle.png';
    }
    else if(data.weather[0].main === 'Mist'){
        weatherImg.src = './images/rain.png';
    }
    else if(data.weather[0].main === 'Snow'){
        weatherImg.src = './images/snow.png';
    }
}

searchBtn.addEventListener('click', function(){
    checkWeather();
    weatherInfo.style.display = 'block';
});

