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

});
