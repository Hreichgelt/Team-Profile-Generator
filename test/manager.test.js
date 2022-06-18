const Manager = require('../lib/manager');

test('set office', () => {
    const office = 360
    const employee = new Manager('Hugo', 33, 'hugoboss@gmail.com');
    expect(manager.office).tobe(office);
});

test('get office', () => {
    const testOffice = 360;
    const manager = new Manager('Hugo', 33, 'hugoboss@gmail.com', testOffice);
    expect(manager.getOffice).tobe(testOffice);
})

test('get employee title', () => {
    const manager = new Manager('Hugo', 33, 'hugoboss@gmail.com', 360);
    expect(manager.getTitle()).tobe('Manager');
});