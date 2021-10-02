// since the employee is the parent class that is the one we will use

const Employee = require('./Employee.js');

class Engineer extends Employee { // since this is another child of the employee, we do not have to run as many functions
    constructor (name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    getGithub() { // github is specific to engineer so we have to run it here
        return this.github;
    };

    getRole() { // When you type in enigneer this is the response you should get at the header 
        return 'Engineer';
    };
}

module.exports = Engineer;