const generateHTML = require("./utils/generateHTML.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const output = path.resolve(__dirname, "./output");
const outputFile = path.join(output, "index.html");

employeesArr = [];

async function employeeInputPrompt() {
  while (true) {
    const response = await inquirer.prompt([
      {
        type: "list",
        name: "title",
        message: "What role would you like to add?",
        choices: ["Engineer", "Intern", "There are no other employees"],
      },
    ]);
    switch (response.title) {
      case "Engineer":
        await addEngineer();
        break;
      case "Intern":
        await addIntern();
        break;

      default:
        builtHTML();
        return;
    }
  }
}

async function addManager() {
  const response = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the managers name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the managers ID Number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the managers email address?",
    },
    {
      type: "input",
      name: "office",
      message: "What is the managers office number?",
    },
  ]);
  const manager = new Manager(
    response.name,
    response.id,
    response.email,
    response.office
  );
  employeesArr.push(manager);
}

async function addEngineer() {
  const response = await inquirer.prompt([
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
  ]);
  const engineer = new Engineer(
    response.name,
    response.id,
    response.email,
    response.github
  );
  employeesArr.push(engineer);
}

async function addIntern() {
  const response = await inquirer.prompt([
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
  ]);

  const intern = new Intern(
    response.name,
    response.id,
    response.email,
    response.school
  );
  employeesArr.push(intern);
}

function builtHTML() {
  console.log("Your html has been created");

  fs.writeFileSync(outputFile, generateHTML(employeesArr));
}

// teamCreate(manager, engineer, intern);
(async () => {
  await addManager();
  await employeeInputPrompt();
})();

// init();
