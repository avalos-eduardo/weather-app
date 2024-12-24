import "./style.css";
import { getWeatherData } from "./get-weather";
import { displayWeatherData } from "./display-weather";

const submit = document.querySelector("#submit");
const input = document.querySelector("#city-input");
const tempText = document.querySelector("#temp");
const locationText = document.querySelector("#card-header");
const feelsLikeText = document.querySelector("#feels-like");
const humidityText = document.querySelector("#humidity");
const windSpeedText = document.querySelector("#wind");
const errorMessage = document.querySelector("#error-message");
const displayedWeatherIcon = document.querySelector("#weather-icon");

export {submit, input, tempText, locationText, feelsLikeText, humidityText, windSpeedText, errorMessage, displayedWeatherIcon};

window.onload = async () => {
    let memphis = await getWeatherData("Memphis, Tennessee");
    displayWeatherData(memphis);
}

submit.addEventListener("click", async (event) => {
    event.preventDefault();
    const city = input.value.trim();

    if (!city){
        errorMessage.innerHTML = "Please enter a location."
        return;
    }

    const dataset = await getWeatherData(city);
    if (dataset){
        displayWeatherData(dataset);
        errorMessage.innerHTML = "";
    }
})