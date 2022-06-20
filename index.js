// include packages required for application
const inquirer = require("inquirer");
const fs = require("fs");


// Exports
const generateHTML = require("./utils/generateHTML.js");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
let employeesArr = [];

// array of questions for team member input
const questions = [
  {
    type: "list",
    name: "title",
    message: "What is the employees title?",
    choices: ["Engineer", "Intern", "Manager"],
  },
  {
    type: "input",
    name: "name",
    message: "What is the employees name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the employees ID Number?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the employees email address?",
  },
];

// question for manager
managerQuest = [
  {
    type: "input",
    name: "office",
    message: "What is your office number?",
  },
];
// question for engineer
engineerQuest = [
  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
  },
];
// question for intern
internQuest = [
  {
    type: "input",
    name: "school",
    message: "What school did/do you attend?",
  },
];

// after manager created - menu to add engineer and intern - need to return to menu after creation
// way to add additional employees after Manager, engineer and intern have been created

