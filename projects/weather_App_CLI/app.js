import chalk from "chalk";
import readline from "readline/promises";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// OpenWeatherMap API Details
const API_KEY = "bf4f5b1fe0c2c3c33ee57be015b2c2e4";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const getWeatherData = async (city) => {
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}`;
  try {
    let res = await fetch(url);
    if (!res.ok) throw chalk.green.bold(`data not found ! ${res.status}`);
    if (res.ok) {
      let data = await res.json();
      console.log(chalk.yellow.bold("\nWeather Information: "));
      console.log(chalk.green.bold(`City: ${data.name}`));
      console.log(chalk.green.bold(`Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C`));
      console.log(chalk.green.bold(`Description: ${data.weather[0].description}`));
      console.log(chalk.green.bold(`Humidity: ${data.main.humidity}%`));
      console.log(chalk.green.bold(`Wind Speed: ${data.wind.speed} m/s\n`));
    }
    rl.close();
  } catch (err) {
    console.log(err);
  }
};
const city = await rl.question("enter the city name : ");
await getWeatherData(city);
