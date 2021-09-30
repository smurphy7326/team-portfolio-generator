const inquirer = require('inquirer');
const Employee = require('./Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const createNewPage = require('./lib/htmlPageTemplate'); // this was helpful last lesson to be able to atke from to help

// this is part of the team array 
const teamProfile = []; // this will be part of employees, engineer, intern, manager

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
        {
            type: 'input',
            name: 'id',
            message: "What is the team managers ID?",
            validate: managerId => {
                var pass = !isNaN(managerId); // testing against NaN, to return the number to be true
                if (pass) {
                    return true;
                } else {
                    console.log("Please enter the managers ID number")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your managers email?",
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else {
                    console.log('Please enter a valid email for the manager');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your managers office number?",
            validate: managersOfficeNumber => {
                var pass = !isNaN(managersOfficeNumber);
                if (pass){
                    return true;
                } else {
                    console.log('Please enter your team managers office number');
                    return false;
                }
            }
        }
    ])
    .then(employeeData => {
        const {name, id, email, officeNumber} = employeeData; // this takes all of the answers above answered
        const manager = new Manager(name, id, email, officeNumber); // learned this from the last lesson to help with the tests
        teamProfile.push(manager);
        chooseEmployee(team);
    })
    .catch(err => { // this is to help catch the errors that could appear 
        console.log(err);
    })
}

const promptEngineer = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'engineer-name',
            message: "what is the name of the team engineer?",
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    return "Please enter a name for a engineer.";
                }
            }
        },
        {
            type: 'input',
            name: 'engineer-id',
            message: "What is the team enginner's ID?",
            validate: engineerId => {
                var pass = !isNaN(engineerId); // testing against NaN, to return the number to be true
                if (pass) {
                    return true;
                } else {
                    console.log("Please enter the engineers ID number")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineer-email',
            message: "What is your engineer's email?",
            validate: engineerEmail => {
                if (engineerEmail) {
                    return true;
                } else {
                    console.log('Please enter a valid email for the engineer');
                    return false;
                }
            }
        },
    ])
}
