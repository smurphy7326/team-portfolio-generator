// name, id, email, get name, get id, , get role - Manager, office number
// should be the same as employee just with a few things added at the end

const { test, expect } = require('@jest/globals'); // makes the variabels avaiable globally when the tests are run. from the jestjs.io website
const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new manager('Dan', 8, 'dan@email.com', 8605029650);

    expect(manager.name).toBe('Dan');
    expect(manager.id).toBe(8);
    expect(manager.email).toBe('dan@email.com');
    expect(manager.officePhoneNumber).toBe(8605029650);
});

test("gets a managers name value", () => {
    const manager = new manager('Dan', 8, 'dan@email.com', 8605029650);
    expect(manager.getName()).toEqual(expect.any(String));
});

test("gets a managers name value", () => {
    const manager = new manager('Dan', 8, 'dan@email.com', 8605029650);
    expect(manager.getId()).toBe(manager.id);
});

test("gets a managers email value", () => {
    const manager = new manager('Dan', 8, 'dan@email.com', 8605029650);
    expect(manager.getEmail()).toBe(manager.email);
});

test("gets a managers officed phone number value", () => {
    const manager = new manager('Dan', 8, 'dan@email.com', 8605029650);
    expect(manager.getOfficePhoneNumber()).toBe(manager.officePhoneNumber);
});

test("manager's role value", () => {
    const manager = new manager('Dan', 8, 'dan@email.com', 8605029650);
    expect(manager.getRole()).toBe('Manager');
});