// name, id, email, get name, get id, get email, get role- engineer, github, gert github, 
// should be the same thing as employee with a few points added at the end 

const Engineer = require('../lib/engineer.js');

test('creates a engineer object', () => {
    const engineer = new Engineer('Steve', '77', 'steve@email.com', "smurphy7326");

    expect(engineer.name).toEqual('Steve');
    expect(engineer.id).toEqual('77');
    expect(engineer.email).toEqual('steve@email.com');
    expect(engineer.github).toEqual('smurphy7326');
});