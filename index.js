// include packages required for application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const output = path.resolve(__dirname, "output");
const outputFile = path.join(output, "index.html");

// Exports
const generateHTML = require("./utils/generateHTML.js");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

employeesArr = [];

function init() {
  function teamCreate() {
    inquirer.prompt([{
          type: "list",
          name: "title",
          message: "What is the employees title?",
          choices: ["Engineer", "Intern", "Manager"],
        }]).then(function (response) {
        switch (response.title) {
          case "manager":
            addManager();
            break;
          case "engineer":
            addEngineer();
            break;
          case "intern":
            addIntern();

          default:
            builtHTML();
        }
      });
  }
}

function addManager() {
  inquirer
    .prompt([
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
      {
        type: "input",
        name: "office",
        message: "What is your office number?",
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.title,
        response.name,
        response.id,
        response.email,
        response.office
      );
      employeesArr.push(manager);
      teamCreate();
    });
}

function addEngineer() {
  inquirer
    .prompt([
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
      {
        type: "input",
        name: "github",
        message: "What is your Github username?",
      },
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.title,
        response.name,
        response.id,
        response.email,
        response.github
      );
      employeesArr.push(engineer);
      teamCreate();
    });
}

function addIntern() {
  inquirer
    .prompt([
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
      {
        type: "input",
        name: "school",
        message: "What school did/do you attend?",
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.title,
        response.name,
        response.id,
        response.email,
        response.school
      );
      employeesArr.push(intern);
      teamCreate();
    });
}

function builtHTML() {
  console.log("Your html has been created");

  fs.writeFileSync(outputFile, generateHTML(employeesArr));
}

// teamCreate();

init();
