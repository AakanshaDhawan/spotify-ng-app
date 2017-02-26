'use strict';

describe('testing music-search app', function() {

  it('should automatically redirect to / when location doesn\'t exist', function() {
    browser.get('http://localhost:8000/#/toto');
    // Check location
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });

  it('should display app properly, so Title should be visible', function() {
    browser.get('http://localhost:8000/#/toto');
    // Checks display App
    expect(element.all(by.css('h1')).first().getText()).
    toMatch(/Music Search/);
  });

  it('should display cards after user inputed text in Field', function() {
    browser.get('http://localhost:8000/');
    element.all(by.css('.artist-input')).sendKeys('Motor').sendKeys('head')
    // Checks that artists cards are displayed
    expect(browser.isElementPresent(by.css('card')))
  });


});
