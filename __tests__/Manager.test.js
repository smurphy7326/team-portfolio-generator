// name, id, email, get name, get id, , get role - Manager, office number
// should be the same as employee just with a few things added at the end

const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Dan', '8', 'dan@email.com', "8605029650");

    expect(manager.name).toEqual('Dan');
    expect(manager.id).toEqual('8');
    expect(manager.email).toEqual('dan@email.com');
    expect(manager.officePhoneNumber).toEqual('8605029650');
    expect(manager.role).toEqual('Manager')
})


