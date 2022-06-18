const Employee = require('../lib/employee');

// create employee object
test('create new employee', () => {
    let employeee = new Employee();
    expect(typeof(employeee)).tobe('object');
});

test('Set name', () => {
    const name = 'Hugo'
    const employeee = new Employee(name);
    expect(employeee.name).tobe(name);
});

test('Set id', () => {
    const testId = 33
    const employeee = new Employee('Hugo', testId);
    expect(employeee.id).tobe(testId);
});

test('Set email', () => {
    const testEmail = 'hugoboss@gmail.com';
    const employeee = new Employee('Hugo', testEmail);
    expect(employeee.email).tobe(testEmail);
});

test('get name', () => {
    const testName = 'Hugo'
    const employeee = new Employee(testName);
    expect(employeee.getName()).tobe(testName);
});

test('get id', () => {
    const testId = 'Hugo'
    const employeee = new Employee(testId);
    expect(employeee.getId()).tobe(testId);
});

test('get email', () => {
    const testEmail = 'Hugo'
    const employeee = new Employee(testEmail);
    expect(employeee.getId()).tobe(testEmail);
});

test('get title', () => {
    const testTitle = 'Hugo'
    const employeee = new Employee(testTitle);
    expect(employeee.getTitle()).tobe(testTitle);
});