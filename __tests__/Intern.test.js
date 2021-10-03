// name, id, email, getname, get id, get email, get role-Intern, school, get school
// should be like the employee with a few addtions at the end

const Intern = require('../lib/Intern.js');

test('creates a intern object', () => {
    const intern = new Intern('Brian', '5', 'brian@email.com', "UCONN");

    expect(intern.name).toEqual('Brian');
    expect(intern.id).toEqual('5');
    expect(intern.email).toEqual('brian@email.com');
    expect(intern.school).toEqual('UCONN');
})
