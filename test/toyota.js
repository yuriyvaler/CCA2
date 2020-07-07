const toyotaSlct = require('../data/toyotaSelectors.json');
const toyotaExpd = require('../data/toyotaExpected.json')

describe('Default  functionality', function () {
    before('BEFORE TESTS', () => {
        browser.maximizeWindow();
        browser.deleteAllCookies();
        browser.url('/');
    })
    it('button should be blue ', function () {
        const result = ($(toyotaSlct.colors.blueColor).getAttribute('class'));
        browser.waitUntil($(toyotaSlct.colors.blueColor).isSelected)
        expect(result).toContain('actual')
    });
});
