const Manager = require('../lib/manager');

test('create new manager', () => {
    const manager = new Manager();
    expect(typeof manager).toBe('object');
});
// Help from friend in field walking me through process
test('make sure we can provide name id email and title and it will set ', () => {
    const manager = new Manager('Hugo', '17', 'email@email.com', '360');
    expect(manager.title).toBe('Manager');
    expect(manager.name).toBe('Hugo');
    expect(manager.id).toBe('17');
    expect(manager.email).toBe('email@email.com');
    expect(manager.office).toBe('360');
});

test('make sure we can get name id email title', () => {
    const manager = new Manager('Hugo', '17', 'email@email.com', '360');
    expect(manager.getTitle()).toBe('Manager');
    expect(manager.getName()).toBe('Hugo');
    expect(manager.getId()).toBe('17');
    expect(manager.getEmail()).toBe('email@email.com');
    expect(manager.getOffice()).toBe('360');
});

