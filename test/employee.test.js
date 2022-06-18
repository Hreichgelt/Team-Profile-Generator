const Employee = require('../lib/employee');

// create employee object
test('create new employee', () => {
    let employeee = new Employee();
    expect(typeof(employeee)).tobe('object');
});

test('Set name', () => {
    const name = 'Hugo';
    const employeee = new Employee(name);
    expect(employeee.name).tobe(name);
});

test('Set id', () => {
    const testId = 33;
    const employeee = new Employee('Hugo', testId);
    expect(employeee.id).tobe(testId);
});

test('Set email', () => {
    const testEmail = 'hugoboss@gmail.com';
    const employeee = new Employee('Hugo', 33, testEmail);
    expect(employeee.email).tobe(testEmail);
});

test('get name', () => {
    const testName = 'Hugo';
    const employeee = new Employee(testName);
    expect(employeee.getName()).tobe(testName);
});

test('get id', () => {
    const testId = 33;
    const employeee = new Employee('Hugo', testId);
    expect(employeee.getId()).tobe(testId);
});

test('get email', () => {
    const testEmail = 'hugoboss@gmail.com';
    const employeee = new Employee('Hugo', 33, testEmail);
    expect(employeee.getId()).tobe(testEmail);
});

test('get title', () => {
    const testTitle = 'Employee';
    const employeee = new Employee('Hugo', 33, testTitle);
    expect(employeee.getTitle()).tobe(testTitle);
});