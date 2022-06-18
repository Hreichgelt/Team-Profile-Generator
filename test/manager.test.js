const Manager = require('../lib/manager');

test('set manager office', () => {
    const testOffice = 360
    const manager = new Manager('Dexter', 34, 'dexterslab@gmail.com', testOffice);
    expect(manager.office).tobe(testOffice);
});

test('get employee title', () => {
    const manager = new Manager('Dexter', 34, 'dexterslab@gmail.com', 360);
    expect(manager.getTitle()).tobe('Manager');
});