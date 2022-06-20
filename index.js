// include packages required for application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path');
const output = path.resolve(__dirname, 'output');
const outputFile = path.join(output, 'index.html')

// Exports
const generateHTML = require("./utils/generateHTML.js");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

employeesArr = [];

function init () {
    function teamCreate () {
        inquirer.prompt([{
            type: "list",
            name: "title",
            message: "What is the employees title?",
            choices: ["Engineer", "Intern", "Manager"],
        }]).then(function (response) {
            switch(response.title) {
                case 'manager': addManager();
                break;
                case 'engineer': addEngineer();
                break;
                case 'intern': addIntern();

                default: builtHTML();
            }
        })
    }
}

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

addManager(questions, managerQuest).then(answers.questions, answers.managerQuest);
employeesArr.push(Manager);
teamCreate();

addEngineer(questions, engineerQuest).then(answers.questions, answers.engineerQuest);
employeesArr.push(Engineer);
teamCreate();

addIntern(questions,internQuest).then(answers.questions, answers.internQuest);
employeesArr.push(Intern);
teamCreate();

function builtHTML() {
    console.log('Your html has been created')

    fs.writeFileSync(outputFile, generateHTML(employeesArr))

}

teamCreate();

init();