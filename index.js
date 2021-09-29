const inquirer = require('inquirer');
const Employee = require('./Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const createNewPage = require('./lib/htmlPageTemplate'); // this was helpful last lesson to be able to atke from to help


const promptManager = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'manager-name',
            message: "what is the name of the team manager?",
            validate: managerName => {
                if (managerName) {
                    return true;
                } else {
                    return "Please enter a name for a manager.";
                }
            }
        },
        {}
    ])
}