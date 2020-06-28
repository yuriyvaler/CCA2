const {expect} = require('chai');
const general = require("./../data/selector.json").general;

describe('Complex Counter App', function () { //define suite title by passing a string

    describe('Getting to the page', function () { //define sub-suite title by passing a string

        it('TC-001 Page title is Complex Counter App', function () { //define test title by passing a string
            browser.url('https://likejean.github.io/homework-5/'); //open baseUrl
            const title = browser.getTitle(); //get page title and assign it to the "title" variable
            browser.pause(2000); //just pause to visually see that something is happening on the page
            expect(title).toEqual('Complex Counter App'); //compare {title} (actual) and "Complex Counter App" (expected)
        })

    });

    describe('Elements value', function () {
        it('TC-009 Header = Counter', function () {
            const actual = $(selectorGnrl.header).getText();
            expect(actual).toEqual(expectedGnrl.general.header);
        })
        it('TC-010 Total Result = Total: 0', function () {
            const actual = $(selectorGnrl.totalResult).getText();
            expect(actual).toEqual(expectedGnrl.general.totalResult);
        })
        it('TC-011 Label for Add Name Field = Enter Counter Title:', function () {
            const actual = $(selectorGnrl.addNameField).getValue()
            expect(actual).toEqual(expectedGnrl.general.addNameField);
        })
        it('TC-012 Placeholder for Add Name Field = Counter Name', function () {
            const actual = $$(selectorGnrl.addNameFieldLabel)[$$(selectorGnrl.addNameFieldLabel).length-2].getText();
            expect(actual).toEqual(expectedGnrl.general.addNameFieldLabel);
        })
        it('TC-013  Label for Default Value Field = Enter Initial Count:', function () {
            const actual = $(selectorGnrl.defaultValueField).getValue();
            expect(actual).toEqual(expectedGnrl.general.defaultValueField);
        })
        it('TC-014  Placeholder for Default Calue Field = 50', function () {
            const actual = $$(selectorGnrl.defaultValueFieldLabel)[$$(selectorGnrl.addNameFieldLabel).length-1].getText();
            expect(actual).toEqual(expectedGnrl.general.defaultValueFieldLabel);
        })
        it('TC-015 Add Counter = ADD COUNTER', function () {
            const actual = $(selectorGnrl.addCounterBtn).getText();
            expect(actual).toEqual(expectedGnrl.general.addCounterBtn);
        })
    })