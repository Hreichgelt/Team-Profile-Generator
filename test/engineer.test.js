const Engineer = require('../lib/engineer');

test('create new engineer', () => {
    const engineer = new Engineer();
    expect(typeof engineer).toBe('object');
});
// Help from friend in field walking me through process
test('make sure we can provide name id email and title and it will set ', () => {
    const engineer = new Engineer('Hugo', '17', 'email@email.com', 'HugoBoss');
    expect(engineer.title).toBe('Engineer');
    expect(engineer.name).toBe('Hugo');
    expect(engineer.id).toBe('17');
    expect(engineer.email).toBe('email@email.com');
    expect(engineer.github).toBe('HugoBoss');
});

test('make sure we can get name id email title', () => {
    const engineer = new Engineer('Hugo', '17', 'email@email.com', 'HugoBoss');
    expect(engineer.getTitle()).toBe('Engineer');
    expect(engineer.getName()).toBe('Hugo');
    expect(engineer.getId()).toBe('17');
    expect(engineer.getEmail()).toBe('email@email.com');
    expect(engineer.getGitHub()).toBe('HugoBoss')
});
