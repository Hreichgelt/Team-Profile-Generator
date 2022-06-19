// include packages required for application 
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const directory = path.resolve(__dirname, 'output');
const filePath = path.join(directory, 'index.html');

// Exports
const generateHTML = require('./utils/generateHTML.js');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

let employeesArr = []

// array of questions for team member input 
const questions = [
    {
        type: 'list',
        name: 'title',
        message: 'What is the employees title?',
        choices: ['Engineer', 'Intern', 'Manager']
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the employees name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employees ID Number?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employees email address?'
    },

    // question for manager
    {
        type: 'input',
        name: 'office',
        message: 'What is your office number?'
    },
    // question for engineer
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
    },
    // question for intern
    {
        type: 'input',
        name: 'school',
        message: 'What school did/do you attend?'
    },

];

// still need - function for creating new employee- starting with manager, need array 
// after manager created - menu to add engineer and intern - need to return to menu after creation
// way to add additional employees after Manager, engineer and intern have been created


// create function to write HTML File
function writeToFile(fileName, data) {
    let content = generateHTML(data);
    fs.writeFile(fileName, content, function (error) {
        if (error) {
            return console.log(error)
        }
        console.log('HTML TEMPLATE GENERATED!');
    });
};

// create a function to initialize app - need to rewrite 
const init = () => {
    if (fs.existsSync(filePath)) {
        inquirer.prompt({
            type: 'confirm',
            message: 'file already exists would you like to replace?',
            name: 'replace'
        }).then(async (response) => {
            let replace = response.replace;
            if (await replace === true) {
                console.log('enter your team info:')
                newEmployee()
            } else if (await replace === false) {
                console.log('file will not be replaced')
            } else {
                console.log('enter your team info')
                newEmployee()
            }
        })
    }
};


// create employee function 
const newEmployee = async () => {
    await inquirer.prompt(questions).then((response) => {
        let title = response.title;
        let name = response.name;
        let id = response.id;
        let office = response.office;
        let github = response.github;
        let school = response.school;


    })
}

init();