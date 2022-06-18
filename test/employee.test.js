const Employee = require('../lib/employee');

// create employee object
test('create new employee', () => {
    const employeee = new Employee();
    expect(typeof (employeee)).tobe('object');
});

test('Set title', () => {
    const testTitle = 'Employee';
    const employeee = new Employee('Hugo', 33, testTitle);
    expect(employeee.title).tobe(testTitle);
});

test('Set name', () => {
    const testName = 'Hugo';
    const employeee = new Employee(testName);
    expect(employeee.name).tobe(testName);
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

test('Set office', () => {
    const testOffice = 360;
    const employeee = new Employee('Hugo', 33, 'hugoboss@gmail.com', testOffice);
    expect(employeee.office).tobe(testOffice);
});

Test('set github', () => {
    const testGit = 'githubUn';
    const employeee = new Engineer('Hugo', 33, 'hugoboss@gmail.com', 360, testGit);
    expect(employeee.github).tobe(testGit);
});

test('get title', () => {
    const testTitle = 'Employee';
    const employeee = new Employee('Hugo', 33, testTitle);
    expect(employeee.getTitle()).tobe(testTitle);
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

test('get office', () => {
    const testOffice = 360;
    const employeee = new Employee('Hugo', 33, 'hugoboss@gmail.com', testOffice);
    expect(employeee.getOffice).tobe(testOffice);
});

test('get github', () => {
    const testGit = 'hreichgelt06';
    const employeee = new Employee('Hugo', 33, 'hugoboss@gmail.com', 360, testGit);
    expect(employeee.getGitHub).tobe(testGit);
})


