// Since this is the parent, manager, intern, and engineer go off of that one. this is why have the constructor specfic to this one

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    getName(){  // when the question comes up, we will get this answer with we will plug into the page template page
        return this.name;
    };

    getId(){ // same as above with the name function
        return this.id;
    };

    getEmail(){ // same as above with the name function
        return this.email;
    };
    
    getRole(){
        return 'Employee';
    };
};

module.exports = Employee;