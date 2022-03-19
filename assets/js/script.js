
var weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=42c34ed261d0d482947917bfe075d9a3';
var searchBtn = document.getElementById('search-button');
var currentCity = document.getElementById('current-city');
var currentDate = document.getElementById('current-date');
var currentTemp = document.getElementById('current-temp');
var currentHum = document.getElementById('current-hum');
var currentWind= document.getElementById('current-wind');




searchBtn.addEventListener('click', function () {
    const getWeather = async () => {
        try {
            const response = await fetch(weatherUrl)
            const data = await response.json()

            displayWeather(data)
        } catch (error) {
            console.log(error)
        }
    }

        getWeather();

    // Display weather in HTML
    function displayWeather(inputParam) {
        currentCity.innerHTML = inputParam.city.name;
        currentDate.innerHTML = inputParam.list[0].dt_txt;
        currentTemp.innerHTML = inputParam.list[0].main.temp;
        currentHum.innerHTML = inputParam
        currentWind.innerHTML = inputParam.list[0].wind.speed;

        console.log(inputParam)

        

    
    }

})




// function getWeather() {
//     var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=42c34ed261d0d482947917bfe075d9a3
// }