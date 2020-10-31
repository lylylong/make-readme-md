const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
// const questions = [];

// function to write README file
// function writeToFile(fileName, data) {}

const askQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "What is your github username? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your github username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
    {
      type: "input",
      name: "title",
      message: "What is your project's title?",
    },
    {
      type: "input",
      name: "description",
      message: "Please write descriptions of this project:",
    },
    {
      type: "list",
      name: "license",
      message: "please select the license that your project has:",
      choices: [
        "MIT",
        "Apache License 2.0",
        "GNU GPLv3",
        "ISC License",
        "None of above",
      ],
    },
    {
      type: "input",
      name: "installation",
      message: "Which command need to be run for your project installation?",
      default: "npm i",
    },
    {
      type: "input",
      name: "test",
      message: "Which command need to be run for your project testing?",
      default: "npm test",
    },
    {
      type: "input",
      name: "usage",
      message: "how to use this project's repo?",
    },
    {
      type: "input",
      name: "contributor",
      message: "Please write the contributor of this project:",
    },
  ]);
};

askQuestions().then((data) => {
  fs.writeFile("./README.md", data, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Readme created!");
    return generateMarkdown(data);
  });
});

// function to initialize program
function init() {}

// function call to initialize program
init();

console.log("everthing is ok");
