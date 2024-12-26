import {tempText, locationText, feelsLikeText, humidityText, windSpeedText, displayedWeatherIcon} from "./index.js";

export async function displayWeatherData(dataset){
    const location = dataset.resolvedAddress;
    const temperature = dataset.currentConditions.temp;
    const feelsLike = dataset.currentConditions.feelslike;
    const humidity = dataset.currentConditions.humidity;
    const windSpeed = dataset.currentConditions.windspeed;
    const time = dataset.currentConditions.datetime;
    const icon = document.querySelector("#icon");

    locationText.innerHTML = `${location}`;
    tempText.innerHTML = `${temperature}°F`;
    feelsLikeText.innerHTML = `Feels Like: ${feelsLike}°F`;
    humidityText.innerHTML = `Humidity: ${humidity}%`;
    windSpeedText.innerHTML = `Wind Speed: ${windSpeed} mph`;

    if (time >= "06:00:00" && time <= "18:00:00"){
        icon.setAttribute("src", "https://static.vecteezy.com/system/resources/previews/022/095/765/non_2x/cartoon-sun-icon-with-facial-expression-free-png.png");
        icon.setAttribute("height", "200px");
        icon.setAttribute("width", "200px");
        timeText.innerHTML = `${time}`;

    }
    else{
        console.log(time);
        icon.setAttribute("src", "https://static.vecteezy.com/system/resources/thumbnails/018/931/352/small_2x/cartoon-moon-icon-png.png");
        icon.setAttribute("height", "200px");
        icon.setAttribute("width", "200px");
        timeText.innerHTML = `${time}`;
    }
}