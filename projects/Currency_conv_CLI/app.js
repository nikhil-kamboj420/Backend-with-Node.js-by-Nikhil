import https from "https";
import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const apiKey = "242ffccce62649f2a5c262bd";
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const convertCurrency = () => {
  let rates;
  https
    .get(url, (res) => {
      let data = "";
      res.on("data", (chunks) => {
        data += chunks;
      });
      res.on("end", () => {
        try {
          rates = JSON.parse(data).conversion_rates;
          rl.question("Enter the amount in USD: ", (amount) => {
            if (!isNaN(amount)) {
              rl.question(
                "Enter the target currency (e.g., INR, EUR, NPR): ",
                (currency) => {
                  currency = currency.toUpperCase();
                  if (rates.hasOwnProperty(currency)) {
                    let result = parseFloat(amount) * rates[currency];
                    console.log(
                      chalk.green.bold(
                        `${amount} USD is approximately ${result.toFixed(
                          2
                        )} ${currency}`
                      )
                    );
                    rl.close();
                  } else {
                    console.log(chalk.red.bold("Invalid currency code!"));
                    setTimeout(convertCurrency, 3000);
                  }
                }
              );
            } else {
              console.log(chalk.red.bold(`Enter a valid amount!`));
              setTimeout(convertCurrency, 3000);
            }
          });
        } catch (err) {
          console.log(chalk.red.bold("Error parsing data:", err.message));
        }
      });
    })
    .on("error", (err) => {
      console.log(chalk.red.bold("Error fetching data:", err.message));
    });
};

convertCurrency();
