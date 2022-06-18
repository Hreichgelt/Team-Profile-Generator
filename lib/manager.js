const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, office);

    getTitle() {
        return 'Manager';
    }

    getOfficeNumber() {
        return this.office;
    }
}

module.exports = Manager;