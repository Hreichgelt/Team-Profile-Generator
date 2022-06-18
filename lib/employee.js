// following lesson 10-03 through 
class Employee {
    constructor (title, name, id, email, office, github) {
        this.title = title
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office
        this.github = github

    }

    getTitle () {
        return this.title
    }
    getName () {
        return this.name;
    }
    getId () {
        return this.id;
    }
    getEmail () {
        return this.email;
    }
    getOffice () {
        return this.office;
    }
    getGitHub () {
        return this.github
    }
}

module.exports = Employee;