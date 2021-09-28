// name, id, email, get name, get id, get email, get role- engineer, github, gert github, 
// should be the same thing as employee with a few points added at the end 

const { test, expect } = require('@jest/globals'); // makes the variabels avaiable globally when the tests are run. from the jestjs.io website
const Engineer = require('../lib/Engineer.js');

test('creates a engineer object', () => {
    const engineer = new engineer('Joe', 17, 'joe@email.com', 'github.com/smurphy7326');

    expect(engineer.name).toBe('Joe');
    expect(engineer.id).toBe(17);
    expect(engineer.email).toBe('joe@email.com');
    expect(engineer.github).toBe('github.com/smurphy7326');
});

test("gets a engineers name value", () => {
    const engineer = new engineer('Joe', 17, 'joe@email.com', 'github.com/smurphy7326');
    expect(engineer.getName()).toEqual(expect.any(String));
});

test("gets a managers name value", () => {
    const engineer = new engineer('Joe', 17, 'joe@email.com', 'github.com/smurphy7326');
    expect(engineer.getId()).toBe(engineer.id);
});

test("gets a managers email value", () => {
    const engineer = new engineer('Joe', 17, 'joe@email.com', 'github.com/smurphy7326');
    expect(engineer.getEmail()).toBe(engineer.email);
});

test("gets a managers github", () => {
    const engineer = new engineer('Joe', 17, 'joe@email.com', 'github.com/smurphy7326');
    expect(engineer.github()).toBe(engineer.github);
});

test("engineer's role value", () => {
    const engineer = new engineer('Joe', 17, 'joe@email.com', 'github.com/smurphy7326');
    expect(engineer.getRole()).toBe('Engineer');
});