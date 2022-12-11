import _ from 'lodash';
import './styles.css';
import {weather, getWeather} from './api.js'
// API KEY https://api.openweathermap.org/data/2.5/weather?q=Boston&APPID=66c9e49c8397f9e8d8c7b51a9ecf3248


const enterLocation = document.querySelector('#bar')
const search = document.querySelector('#searchButton')
search.addEventListener('click', displayInfo)


const country = document.querySelector('.country')
const city = document.querySelector('.city')
const description = document.querySelector('.description')
const currentWeather = document.querySelector('.currentWeather')
const low = document.querySelector('.low')
const high = document.querySelector('.high')
const feelsLike = document.querySelector('.feelsLike')


async function displayInfo() {
        const info = await getWeather(enterLocation.value)
        console.log(info)
        country.textContent = info.location
        city.textContent = info.city.charAt(0).toUpperCase() + info.city.slice(1) + ','
        description.textContent = info.desc
        low.textContent = "low: " + info.low
        high.textContent = "high: " + info.high
        currentWeather.textContent = info.current
        feelsLike.textContent = info.feel
        
    
    

}

    







