const Engineer = require('../lib/engineer');

test('set github', () => {
    const git = 'github';
    const employee = new Engineer('Hugo', 33, 'hugoboss@gmail.com',);
    expect(employee.github).tobe(git);
});

test('get github', () => {
    const testGitHub = 'hreichgelt06';
    const engineer = new Engineer('Hugo', 33, 'hugoboss@gmail.com', testGitHub);
    expect(engineer.getGitHub).tobe(testGitHub)
});

test('get employee title', () => {
    const engineer = new Engineer('Hugo', 33, 'hugoboss@gmail.com');
    expect(engineer.getTitle()).tobe('Engineer');
});