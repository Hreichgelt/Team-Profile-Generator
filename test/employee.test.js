const Employee = require('../lib/employee');

// create employee object
test('create new employee', () => {
    let employeee = new Employee();
    expect(typeof(employeee)).tobe('object');
});

test('Set name', () => {
    const name = 'Hugo',
    const employeee = new Employee(name);
    expect(employeee.name).tobe(name);
});

test('Set id', () => {
    const testId = 33,
    const employeee = new Employee('Hugo', testId);
    expect(employeee.id).tobe(testId);
});

test('Set email', () => {
    const testEmail = 'hugoboss@gmail.com';
    const employeee = new Employee('Hugo', testEmail);
    expect(employeee.email).tobe(testEmail);
});

test('set')