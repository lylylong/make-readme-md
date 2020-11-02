// initial setup
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// prompt questions for user to answer
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
      choices: ["MIT", "Apache License 2.0", "GPL 3.0", "BSD 3", "No license"],
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
      name: "screenshot",
      message: "Please provide your screenshot link:",
    },
    {
      type: "input",
      name: "usage",
      message: "How to use this project's repo?",
    },
    {
      type: "input",
      name: "contributor",
      message: "Please write the contributor of this project:",
    },
  ]);
};

// generate the readme file
askQuestions().then((response) => {
  console.log(response);
  fs.writeFile("./README.md", generateMarkdown(response), (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
  console.log("Readme created!");
});
