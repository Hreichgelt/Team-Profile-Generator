const Engineer = require('../lib/engineer');


test('set github', () => {
    const git = 'githubUn';
    const employeee = new Engineer('Hugo', 33, 'hugoboss@gmail.com',);
    expect(employeee.github).tobe(git);
});

test('get github', () => {
    const testGitHub = 'hreichgelt06';
    const Engineer = new Engineer('Hugo', 33, 'hugoboss@gmail.com', testGitHub);
    expect(employeee.getGitHub).tobe(testGitHub)
});