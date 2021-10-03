// name, id, email, get name, get id, , get role - Manager, office number
// should be the same as employee just with a few things added at the end

const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Dan', '8', 'dan@email.com', '3');
    
    expect(manager.name).toBe('Dan');
    expect(manager.id).toBe('8');
    expect(manager.email).toBe('dan@email.com');
    expect(manager.officeNumber).toBe('3');

});