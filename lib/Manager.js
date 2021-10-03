// since the employee is the parent class that is the one we will use

const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super(name, id, email); // this is standard from the employee one, so there is really no need to change anything for those ones
        this.officeNumber = officeNumber; // this is the new plan where you have to change as it will be described down below
    }
    getOfficeNumber() {
        return this.officeNumber;
    };
    getRole(){
        return `Manager`; // this is the article that will come back

    };
}

// this comes through when the manager
module.exports = Manager;