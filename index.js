const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const createNewPage = require('./src/page-Template.js'); // this was helpful last lesson to be able to take from to help
const fs = require('fs');

// this is part of the team array 
const teamProfile = []; // this will be part of employees, engineer, intern, manager

const promptManager = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'managerName',
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
                const pass = !isNaN(managerId);
                if (managerId && pass) {
                    return true;
                } else {
                    return "Please enter the managers ID number";
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
                    return 'Please enter a valid email for the manager';
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your managers office number?",
            validate: managersOfficeNumber => {
                const pass = !isNaN(managersOfficeNumber)
                if (managersOfficeNumber && pass){
                    return true;
                } else {
                    return 'Please enter your team managers office number';
                }
            }
        },
    ])
    .then(employeeData => {
        const {name, id, email, officeNumber} = employeeData; // this takes all of the answers above answered
        const manager = new Manager(name, id, email, officeNumber); // learned this from the last lesson to help with the tests
        teamProfile.push(manager);
        choiceEmployee();
    });
};

// Reading the requirements again saying that if you want to add more people to the team
// Question Prompts will be added to see if you want the engineers and interns and what you want after each person is added

const choiceEmployee = () => {
    return inquirer
    .prompt(
        {
            type:'list',
            name: 'employeeType',
            message: "Would you like to add more team members?",
            choices: ['Add an Engineer', 'Add an Intern', 'Assemble the Team!']
        })

.then(function(data) {
    if(data.employeeType === 'Add an Engineer') {
        promptEngineer(teamProfile);
    } else if (data.employeeType === 'Add an Intern') {
        promptIntern(teamProfile);
    } else {
        createNewPage();
    };
  });
};


const promptEngineer = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'engineer-name',
            message: "What is the name of the team engineer?",
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    return "Please enter a name for an Engineer.";
                }
            }
        },
        {
            type: 'input',
            name: 'engineer-id',
            message: "What is the team Engineer's ID?",
            validate: engineerId => {
                const pass = !isNaN(engineerId);
                if (engineerId && pass) {
                    return true;
                } else {
                    return "Please enter the engineer's ID number";
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
                    return 'Please enter a valid email for the engineer';
                }
            }
        },
        {
            type: 'input',
            name: 'engineer-github',
            message: "What is the Engineer's github profile?",
            validate: engineerGithub => {
                if (engineerGithub) {
                    return true;
                } else {
                    return "Enter the Engineers valid email address";
                }
            }
        }
    ])
    .then(engineerData => {
        const{name, id, email, github} = engineerData;
        const engineer = new Engineer(name, id, email, github);
        teamProfile.push(engineer);
        choiceEmployee();
    })
};

const promptIntern = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'intern-name',
            message: "what is the name of the team intern?",
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    return "Please enter a name for an intern.";
                }
            }
        },
        {
            type: 'input',
            name: 'intern-id',
            message: "What is the team interns ID?",
            validate: internId => {
                const pass = !isNaN(internId)
                if (internId && pass) {
                    return true;
                } else {
                    return "Please enter the intern's ID number";
                }
            }
        },
        {
            type: 'input',
            name: 'intern-email',
            message: "What is your intern email?",
            validate: internEmail => {
                if (internEmail) {
                    return true;
                } else {
                    return 'Please enter a valid email for the intern';
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does the intern go to?",
            validate: internSchool => {
                if (internSchool) {
                    return true;
                } else {
                    return "Please enter a school for the intern";
                }
            }
        }
    ])
    .then(employeeData => {
        const{name, id, email, school} = employeeData;
        const intern = new Intern(name, id, email, school);
        teamProfile.push(intern);
        choiceEmployee();
    })
};

// to start asking the questions 
promptManager();

