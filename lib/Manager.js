// since the eemployee is the parent class that is the one we will use

const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor (name, id, email, officePhoneNumber){
        super(name, id, email)
        this.officePhoneNumber = officePhoneNumber;
        this.role = 'Manager';
    };

}

module.exports = Manager;