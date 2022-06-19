// trying to follow Module 10 lesson 23
const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name , id, email, github) {
        super('Engineer', name, id, email);
        this.github = github
    }

    getGitHub () {
        return this.github;
    }
}

module.exports = Engineer;