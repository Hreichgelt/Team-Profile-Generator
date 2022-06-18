// include packages required for application 
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./utils/generateHTML.js');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

// array of questions for team member input 
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your title?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your ID Number?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
    },
];

// create a for loop to run through questions for each staff member?


// create function to write HTML File
function writeToFile(filename, data) {
    let content = generateHTML(data);
    fs.writeFile('./output/index.html', content, function (error){
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