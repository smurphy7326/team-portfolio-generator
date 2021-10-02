const inquirer = require('inquirer');
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
        },
    ])
    .then(employeeData => {
        const {name, id, email, officeNumber} = employeeData; // this takes all of the answers above answered
        const manager = new Manager(name, id, email, officeNumber); // learned this from the last lesson to help with the tests
        teamProfile.push(manager);
    })
    .then(addEmployee);
};

// Reading the requirements again saying that if you want to add more people to the team
// Question Prompts will be added to see if you want the engineers and interns and what you want after each person is added

function choiceEmployee(teamProfile){
    return inquirer
    .prompt(
        {
            type:'list',
            name: 'employeeType',
            message: "Would you like to add more team memebers?",
            choices: ['Assign an Engineer', 'Assign an Intern', 'Assemble the Team!']
        }

.then(function(data) {
    if(data.employeeType === 'Add an Engineer') {
        promptEngineer(team);
    } else if (data.employeeType === 'Assign an Intern') {
        promptIntern(team);
    } else {
        createNewPage(team);
    }
})
    .catch(err => {
        console.log(err);
    })
,

function promptEngineer () {
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
        {
            type: 'input',
            name: 'enginner-github',
            message: "What is the engineer's github profile?",
            validate: engineerGithub => {
                if (engineerGithub) {
                    return true;
                } else {
                    console.log("Enter the enginners valid email address");
                    return false;
                }
            }
        }
    ])
    .then(engineerData => {
        const{name, id, email, github} = engineerData;
        const engineer = new Engineer(name, id, email, github);
        teamProfile.push(engineer);
        chooseEngineer(team);
    })
    .catch(err => { // this is to help catch the errors that could appear 
        console.log(err);
    })
};

function promptIntern () {
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
                    return "Please enter a name for a intern.";
                }
            }
        },
        {
            type: 'input',
            name: 'intern-id',
            message: "What is the team interns ID?",
            validate: internId => {
                var pass = !isNaN(internId); // testing against NaN, to return the number to be true
                if (pass) {
                    return true;
                } else {
                    console.log("Please enter the intern's ID number")
                    return false;
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
                    console.log('Please enter a valid email for the intern');
                    return false;
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
                    console.log("Please enter a school for the intern");
                    return false;
                }
            }
        }
    .then(employeeData => {
        const{name, id, email, school} = employeeData;
        const intern = new Intern(name, id, email, school);
        teamProfile.push(intern);
        chooseIntern(team);
    })
    .catch(err => { // this is to help catch the errors that could appear 
        console.log(err);
    })
}
}

// To start all the questions 
const init = () => promptManager()

// Initialize the program, like in the last lesson
init();