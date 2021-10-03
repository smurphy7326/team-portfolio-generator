const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const createNewPage = require('./src/page-Template.js'); // this was helpful last lesson to be able to take from to help
const fs = require('fs');

// this is part of the team array 
const teamProfile = []; // this will be part of employees, engineer, intern, manager

// Questions for the Manager to populate in the page-template to then go to the HTML
const promptManager = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the name of the Team Manager?",
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
            name: 'managerId',
            message: "What is the Team Managers ID?",
            validate: managerId => {
                const pass = !isNaN(managerId); // This is to make sure that the ID only has number in the ID or it will not accept the answer
                if (managerId && pass) { // When it works it will allow only numbers
                    return true;
                } else {
                    return "Please enter the managers ID number";
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is your Managers email?",
            validate: managerEmail => {
                var pass = managerEmail.includes('@'); // This is to make sure that the email has an @ in the answer or it will not accept the answer
                if (pass) {
                    return true;
                } else {
                    return 'Please enter a valid email for the Manager!';
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your Manager's office number?",
            validate: officeNumber => {
                const pass = !isNaN(officeNumber) // This is to make sure that the ID only has number in the ID or it will not accept the answer
                if (officeNumber && pass){
                    return true;
                } else {
                    return 'Please enter your Team Managers office number';
                }
            }
        }
    ])
    .then(({ managerName, managerId, managerEmail, officeNumber }) => { // Had to adjust manager in front of all the variables and to help make it neater
        const manager = new Manager(managerName, managerId, managerEmail, officeNumber); // learned this from the last lesson to help with the tests
        teamProfile.push(manager);
        choiceEmployee();
    });
};

// Reading the requirements again saying that if you want to add more people to the team
// Question Prompts will be added to see if you want the engineers and interns 
// you can add as many as needed or only have three for the requirement for the project

const choiceEmployee = () => {
    return inquirer
    .prompt(
        {
            type:'list',
            name: 'employeeType',
            message: "Would you like to add more team members?",
            choices: ['Add an Engineer', 'Add an Intern', 'Assemble the Team!'] // Avengers Assemble 
        })

.then(({employeeType}) => {
    if(employeeType === 'Add an Engineer') {
        promptEngineer(teamProfile); // Asks the Engineers Questions
    } else if (employeeType === 'Add an Intern') {
        promptIntern(teamProfile); // Asks the Interns questions 
    } else {
        writeFile(createNewPage(teamProfile)); // Goes to the index.html in the dist folder 
    };
  });
};


const promptEngineer = teamProfile => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the name of the team Engineer?",
            validate: engineerName => {
                if (engineerName) { // Any name  should work here
                    return true;
                } else {
                    return "Please enter a name for an Engineer.";
                }
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is the team Engineer's ID?",
            validate: engineerId => {
                const pass = !isNaN(engineerId); // This is to make sure that the ID only has number in the ID or it will not accept the answer
                if (engineerId && pass) {
                    return true;
                } else {
                    return "Please enter the Engineer's ID number";
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is your Engineer's email?",
            validate: engineerEmail => {
                var pass = engineerEmail.includes('@'); // This is to make sure that the email has an @ in the answer or it will not accept the answer
                if (pass) {
                    return true;
                } else {
                    return 'Please enter a valid email for the Engineer!';
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is the Engineer's github profile?",
            validate: engineerGithub => { // any username should be accepted here
                if (engineerGithub) {
                    return true;
                } else {
                    return "Enter the Engineer's valid Github username";
                }
            }
        }
    ])
    .then(({engineerName, engineerId, engineerEmail, engineerGithub}) => {
        const employee = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub); // Ask BCS helped with this again, helping with organization
        teamProfile.push(employee);
        choiceEmployee();
    })
};

const promptIntern = teamProfile => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is the name of the team Intern?",
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    return "Please enter a name for an Intern.";
                }
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is the team interns ID?",
            validate: internId => {
                const pass = !isNaN(internId)  // This is to make sure that the ID only has number in the ID or it will not accept the answer
                if (internId && pass) {
                    return true;
                } else {
                    return "Please enter the Intern's ID number";
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is your Intern email?",
            validate: internEmail => {
                var pass = internEmail.includes('@'); // This is to make sure that the email has an @ in the answer or it will not accept the answer
                if (pass) {
                    return true;
                } else {
                    return 'Please enter a valid email for the Manager!';
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What school does the Intern go to?",
            validate: internSchool => { // Any prompt should work for this one
                if (internSchool) {
                    return true;
                } else {
                    return "Please enter a school for the Intern";
                }
            }
        }
    ])
    .then(({internName, internId, internEmail, internSchool}) => {
        const employee = new Intern(internName, internId, internEmail, internSchool);
        teamProfile.push(employee);
        choiceEmployee();
    })
};

// This is like the Generate Markdown from last weeks assignment
const writeFile = newFile => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', newFile, err => { // This is populated to the dist.index.html
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: console.log('File has been created!!') // Successful completion message
            });
        });
    });
};

// to start asking the questions 
promptManager();
