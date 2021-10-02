// This is how the answers should be populated 
// I wrote this into index out of habit but that is where it should be populated, since it is in dist folder
// how the HTML page should run

const generateManager = manager => {
    return `
    <div class="card text-dark ${manager.getRole()}-border">
    <div class="card-header ${manager.getRole()}-color text-white">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-text"><i class="fas fa-user-tie"></i> ${manager.getRole()}</h3>
            </div>
            <div class="card-body bg-white"> <!-- card bootstrap website -->
                        <ul class="list-group list-group flush"> <!-- remove some borders and rounded corners to render list group items edge-to-edge in a parent container taken from bootstraps website -->
                            <li class="list-group-item">ID: ${manager.getId()}</li>
                            <li class="list-group-item">Email: <a href = "mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
                            <li class="list-group-item"> Office Number: ${manager.getOfficeNumber()}</li>
                        </ul>
                    </div>
                    </div>
                `;
            };
// There is nothing more needed from this prompt because it is always going to be asked first, this will always be exported 

// Engineer Section 

const generateEngineer = engineerSection => {
    const engineerCards = engineerSection.forEach((engineer)=> {
    return `
    <div class='card-columns">
        <div class="card card-header">
            <div class="card-header ${this.getRole()}-color text-white">
                <h2>${engineer.getName()}</h2>
                <h3 class="card-text"><i class="fab fa-black-tie"></i> Engineer </h3>
            </div>
            <div class="card-body bg-white"> <!-- card bootstrap website -->
                        <ul class="list-group list-group flush"> <!-- remove some borders and rounded corners to render list group items edge-to-edge in a parent container taken from bootstraps website -->
                            <li class="list-group-item">ID: ${engineer.getId()}</li>
                            <li class="list-group-item">Email: <a href = "mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                            <li class="list-group-item"> Github: <a href='https://github.com./${engineer.getGithub()}'>${engineer.getGithub()}</a></li>
                        </ul>
                    </div>
                </div>
            `;
        });
    };
// you have to export this because i have yet to do it from another place
// Intern Section

const generateIntern = internSection => {
    const internCard = internSection.forEach((intern) => {
    return `
    <div class='card-columns">
        <div class="card card-header">
            <div class="card-header ${this.getRole()}-color text-white">
                <h2>${intern.getName()}</h2>
                <h3 class="card-text"><i class="fab fa-black-tie"></i> Manager </h3>
            </div>
            <div class="card-body bg-white"> <!-- card bootstrap website -->
                        <ul class="list-group list-group flush"> <!-- remove some borders and rounded corners to render list group items edge-to-edge in a parent container taken from bootstraps website -->
                            <li class="list-group-item">ID: ${intern.getId()}</li>
                            <li class="list-group-item">Email: <a href = "mailto: ${intern.getEmail()}">${intern.getEmail()}</a></li>
                            <li class="list-group-item"> School: ${intern.getSchool()}</li>
                        </ul>
                    </div>
                </div>
            `;
        });
    };

// generate the HTML Page 
module.exports = teamProfile => {
    const manager = teamProfile[0];
    const engineerSection = teamProfile.filter(employee => employee.getRole() === 'Engineer');
    const internSection = teamProfile.filter(employee => employee.getRole() === 'Intern');

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/all.css" integrity="sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ" crossorigin="anonymous">
        <link rel="stylesheet" href="../src/css/style.css">
        <title>Team Generator</title>
    </head>
    <body>
        <header class="bg-success text-center align-center text-white">
            <h1 class="test-center">The Team</h1>
        </div>
    </div>
    </header>
    <main class="container">
            <div class="row">
            ${generateManager(manager)}
            ${generateEngineer(engineerSection)}
            ${generateIntern(internSection)}
        </div>
    </section>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
};