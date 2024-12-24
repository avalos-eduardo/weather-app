import {tempText, locationText, feelsLikeText, humidityText, windSpeedText, displayedWeatherIcon} from "./index.js";

export async function displayWeatherData(dataset){
    const location = dataset.resolvedAddress;
    const temperature = dataset.currentConditions.temp;
    const feelsLike = dataset.currentConditions.feelslike;
    const humidity = dataset.currentConditions.humidity;
    const windSpeed = dataset.currentConditions.windspeed;
    const time = dataset.currentConditions.datetime;

    locationText.innerHTML = `${location}`;
    tempText.innerHTML = `${temperature}°F`;
    feelsLikeText.innerHTML = `Feels Like: ${feelsLike}°F`;
    humidityText.innerHTML = `Humidity: ${humidity}%`;
    windSpeedText.innerHTML = `Wind Speed: ${windSpeed} mph`;

    if (time >= "06:00:00" && time <= "18:00:00"){
        displayedWeatherIcon.innerHTML = `☀️ <p>${time}</p>`;

    }
    else{
        console.log(time);
        displayedWeatherIcon.innerHTML = `🌠 <p>${time}</p>`;
    }
}