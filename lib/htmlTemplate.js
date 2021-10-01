
module.exports = () => {
    const fs = require('fs');
    const Manager = require('../lib/Manager');
    const Intern = require('../lib/Intern');
    const Enginner = require('../lib/Engineer')
    // We will not include employee because it is the parent 

// Run the HTML file 
// Using the in class examples to help write this from week 10
const generateEmployeeCards = (teamLineupList) => {
    function writeManager(employee) {
        for (i = 0; i < employee.length; i++) {
            if (employee[i].role === "Manager") {
                managerNewCard.push(employee[i].managerCard);
            }
        }
    }
    function writeEngineer(employee) {
        for (i = 0; i < employee.length; i++) {
            if (employee[i].role === "Engineer") {
                engineerNewCard.push(employee[i].engineerCard);
            }
        }
    }
    function writeIntern(employee) {
        for (i = 0; i < employee.length; i++) {
            if (employee[i].role === "Manager") {
                internNewCard.push(employee[i].managerCard);
            }
        }
    }

    // Generate the cards that were made from the prompts
    writeManager(generateEmployeeCards);
    writeEngineer(generateEmployeeCards);
    writeIntern(generateEmployeeCards);

    return `
    `
}
}