const Intern = require('../lib/intern');

test('set intern', () => {
    const testSchool = 'Winona State';
    const intern = new Intern('Copper', 12, 'coppout@gmail.com', testSchool);
    expect(intern.school).tobe(testSchool);
});

test('get intern', () => {
    const intern
})