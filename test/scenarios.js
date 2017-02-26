'use strict';

describe('testing music-search app', function() {


  it('should automatically redirect to / when location doesn\'t exist', function() {
    browser.get('http://localhost:8000/#/toto');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });

});
