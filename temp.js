function checkWeather(temperature) {
    return temperature > 30 ? "Hot" : "Moderate";
}

// Test the checkWeather function
const currentTemperature = 32;  // Input your current temperature

console.log(`The weather is: ${checkWeather(currentTemperature)}`);
