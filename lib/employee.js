// following lesson 10-03 through 
class Employee {
    constructor (title, name, id, email, office, github, school) {
        this.title = title;
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
        this.github = github;
        this.school = school;

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
    getSchool () {
        return this.school
    }
}

module.exports = Employee;