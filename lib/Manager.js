// since ht eemployee is the parent class that is the one we will use

const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor (name, id, email, officePhoneNumber){
        super(name, id, email)
        this.officePhoneNumber = officePhoneNumber;
    }
    getOfficePhomeNumber() {
        return this.officePhoneNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;