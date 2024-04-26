#! /usr/bin/env node
// Importing inquirer from inquirer
import inquirer from "inquirer";
import chalk from "chalk";
// Display a colourfull welcome message
console.log(chalk.bold.cyanBright("\n\t\t code with Nawaz-word counter"));
console.log("=".repeat(60));
// Prompt the user to enter a Sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);
// Triming the sentence and splitting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");
// Analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
