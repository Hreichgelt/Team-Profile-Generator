const Employee = require('./employee');

class Intern  extends Employee {
    constructor(name, id, email, school,) {
        super(name, id, email);
        this.school = school
    }
    getschool() {
        return this.school;
    }
    getTitle() {
        return 'Intern';
    }
}

module.exports = Intern;