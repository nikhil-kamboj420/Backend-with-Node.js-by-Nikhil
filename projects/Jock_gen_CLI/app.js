import chalk from "chalk";
import https from "https";

const url = "https://official-joke-api.appspot.com/random_joke";
https.get(url, (res) => {
  let data = "";
  res.on("data", (chunks) => {
    data += chunks;
  });
  res.on("end",()=>{
    const joke = JSON.parse(data);
    console.log(chalk.green.bold.underline(`Joke: ${joke.setup} - ${joke.punchline}`));
  })
});
