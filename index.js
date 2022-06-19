// include packages required for application 
const inquirer = require('inquirer');
const fs = require('fs');

// Exports
const generateHTML = require('./utils/generateHTML.js');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

// array of questions for team member input - need to break up for individual
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
        // question for manager
        {
            type: 'input',
            name: 'school',
            message: 'What school did/do you attend?'
        },

];

// create a for loop to run through questions for each staff member?


// create function to write HTML File
function writeToFile(filename, data) {
    let content = generateHTML(data);
    fs.writeFile('./output/index.html', content, function (error) {
        if (error) {
            return console.log(error)
        }
        console.log('HTML TEMPLATE GENERATED!');
    });
};

// create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        let fileName = "index.html"
        writeToFile(fileName, data)
    });
}
init();