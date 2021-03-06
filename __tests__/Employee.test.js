// this is the first one to make so this ideally can be the template for the others
const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Sean', 24, 'sean@mail.com');

    expect(employee.name).toBe('Sean');
    expect(employee.id).toBe(24);
    expect(employee.email).toBe('sean@mail.com');
});

test("gets employee name value", () => { 
    const employee = new Employee('Sean', 24, 'sean@mail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

test("gets an employees id value", () => {
    const employee = new Employee('Sean', 24, 'sean@mail.com');
    expect(employee.getId()).toBe(employee.id);
});

test("get an employees email value", () => { // Email value should be shown
    const employee = new Employee('Sean', 24, 'sean@mail.com');
    expect(employee.getEmail()).toBe(employee.email);
});

test("employee's role value", () => { // Criteria says that we have to include the get role
    const employee = new Employee('Sean', 24, 'sean@mail.com');
    expect(employee.getRole()).toBe('Employee');
});
