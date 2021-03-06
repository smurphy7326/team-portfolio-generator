
const Employee = require('./Employee.js');

class Intern extends Employee { // another child of the parent Employee
    constructor (name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    getSchool() { // get the schools reponse and put towards the index.js
        return `${this.school}`;
    };
    getRole(){
        return 'Intern';
    };
}

module.exports = Intern;