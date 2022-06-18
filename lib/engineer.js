// trying to follow Module 10 lesson 23
const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name , id, email, github) {
        super(name, id, email);
        this.github = github
    }

    getTitle () {
        return 'Engineer';
    }

    getGitHub () {
        return this.github;
    }
}

module.exports = Engineer;