
var searchBtn = document.getElementById('search-button');
var currentCity = document.getElementById('current-city');
var currentDate = document.getElementById('current-date');
var currentTemp = document.getElementById('current-temp');
var currentHum = document.getElementById('current-hum');
var currentWind = document.getElementById('current-wind');
var currentUV = document.getElementById('current-uv');


searchBtn.addEventListener('click', function (event) {
    let userInput = document.getElementById('cityNameBtn').value.trim()
    let splitInput = userInput.split(" ")
    let urlUserInput = splitInput.join('+')

    var weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?q='+urlUserInput+'&units=imperial&appid=42c34ed261d0d482947917bfe075d9a3';


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
        currentHum.innerHTML = inputParam.list[0].main.humidity;
        currentWind.innerHTML = inputParam.list[0].wind.speed;
        currentUV.innerHTML = inputParam

     

        console.log(inputParam)

        for (let i = 0; i < 5; i++) {
            console.log(inputParam.list[i]);
            let date = inputParam.list[i].dt_txt
            let formatedDate = moment.unix(date).format("MMM Do");
            let temp = inputParam.list[i].main.temp
            let wind = inputParam.list[i].wind.speed
            let humidity = inputParam.list[i].main.humidity
            let cloudy = inputParam.list[i].clouds.all
           let cardHtml = `<div class="card col-2">
                                <div class="card-body">
                                    <h6>`+date+`</h6>
                                    <h6>`+cloudy+`% cloudy</h6>
                                    <img
                                    src="http://openweathermap.org/img/wn/${
                                      inputParam.list[i].weather[0].icon
                                    }@4x.png"
                                    class="card-img-top"
                                   
                                  />
                                    <h6>Temp  `+temp+`</h6>
                                    <h6>Wind `+wind+`</h6>
                                    <h6>Humidity `+humidity+`</h6>
                                </div>
                            </div>`
                // $('#weather-cards').empty()
                $('#weather-cards').append(cardHtml)

        }

    
    }

})




// function getWeather() {
//     var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=42c34ed261d0d482947917bfe075d9a3
// }