const Intern = require('../lib/intern');

test('create new intern', () => {
    const intern = new Intern();
    expect(typeof intern).toBe('object');
});
// Help from friend in field walking me through process
test('make sure we can provide name id email and title and it will set ', () => {
    const intern = new Intern('Hugo', '17', 'email@email.com', 'Winona State');
    expect(intern.title).toBe('Intern');
    expect(intern.name).toBe('Hugo');
    expect(intern.id).toBe('17');
    expect(intern.email).toBe('email@email.com');
    expect(intern.school).toBe('Winona State');
});

test('make sure we can get name id email title', () => {
    const intern = new Intern('Hugo', '17', 'email@email.com', 'Winona State');
    expect(intern.getTitle()).toBe('Intern');
    expect(intern.getName()).toBe('Hugo');
    expect(intern.getId()).toBe('17');
    expect(intern.getEmail()).toBe('email@email.com');
    expect(intern.getschool()).toBe('Winona State');
});


