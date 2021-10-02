// since the employee is the parent class that is the one we will use

const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor (name, id, email, github){
        super(name, id, email)
        this.github = github;
        this.role = 'Engineer';
    };

}

module.exports = Engineer;