import { errorMessage } from "./index.js";

export async function getWeatherData(city){
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=5S4ZEX5AP259Y7ABDQM4Z2Z53`, {mode: "cors"})
        const dataset = await response.json();
        console.log(dataset);

        return dataset;
    }
    catch{
        errorMessage.innerHTML = "Enter a valid location."
        console.log("Enter a correct value.");
    }
}