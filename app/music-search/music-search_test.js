'use strict';

describe('MusicSearch module', function() {

  beforeEach(module('MusicSearch'));


  describe('view1 controller', function(){



    it('should ....', inject(function($controller) {
      var msCtrl = $controller('MusicSearchCtrl');
      expect(msCtrl).toBeDefined();
    }));

  });


  describe('Dummy Test', function() {
    it('has a dummy spec to test 2 + 2', function() {
      // An intentionally failing test. No code within expect() will never equal 4.
      expect(2 + 2).toEqual(4);
    });
  });

});

/*
*
*/
describe('MusicSearch factory', function() {
  var MusicSearchObj;

  // Before each test load our api.users module
  beforeEach(angular.mock.module('MusicSearch'));

  // Before each test set our injected Users factory (_Users_) to our local Users variable
  beforeEach(inject(function(_MusicSearchFactory_) {
    MusicSearchObj = _MusicSearchFactory_;
  }));

  // A simple test to verify the Users factory exists
  it('should exist', function() {
    expect(MusicSearchObj).toBeDefined();
  });

  // A set of tests for our Users.all() method
  describe('.all()', function() {
    // A simple test to verify the method all exists
    it('should exist', function() {
      expect(MusicSearchObj.all).toBeDefined();
    });
  });


});
