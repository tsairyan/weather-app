export {weather, getWeather}
const weather = (location, city, current, feel, low, high, desc) => {
    return { location, city, current, feel , low, high, desc};
}

async function getWeather(city) {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=66c9e49c8397f9e8d8c7b51a9ecf3248&units=imperial')
        const weatherData = await response.json()
        console.log(weatherData)
        return weather(weatherData.sys.country, city, weatherData.main.temp, 
            weatherData.main.feels_like, 
            weatherData.main.temp_min, 
            weatherData.main.temp_max, 
            weatherData.weather[0].main)
        
        
        

    } catch {
        console.log("Unable to get Weather")
    }


}

