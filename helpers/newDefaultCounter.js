const selectorGen = require ('./../data/selectors.json').general;
const expectedGen = require ('./../data/expected.json').general;
const selectorCnt = require ('./../data/selectors.json').counter;

function addNewDefaultCounter(value, name) {
  $(selectorCnt.deleteBtn).click();
  $(selectorGen.addNameField).setValue(name);
  $(selectorGen.defaultValueField).setValue(value);
  $(selectorGen.addCounterBtn).click();
}

module.exports = {addNewDefaultCounter};