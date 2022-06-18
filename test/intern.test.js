const Intern = require('../lib/intern');

test('set school', () => {
    const school = 'school';
    const employee = new Intern('Hugo', 33, 'hugoboss@gmail.com');
    expect(employee.school).tobe(school);
});

test('get school', () => {
    const testSchool = 'Winona State';
    const intern = new Intern('Hugo', 33, 'hugoboss@gmail.com', testSchool);
    expect(intern.getSchool).tobe(testSchool);
});

test('get employee title', () => {
    const intern = new Intern('Hugo', 33, 'hugoboss@gmail.com');
    expect(intern.getTitle()).tobe('Intern')
})