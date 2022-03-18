
var weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=42c34ed261d0d482947917bfe075d9a3';
var searchBtn = document.getElementById('search-button');
var currentWeather = document.getElementById('current-weather');




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
console.log(getWeather)
        getWeather();

    // Display weather in HTML
    function displayWeather() {
        currentWeather.innerHTML = weatherUrl.data;
        console.log('inputParam')

        

    
    }

})




// function getWeather() {
//     var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=42c34ed261d0d482947917bfe075d9a3
// }