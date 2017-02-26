'use strict';

// describe('MusicSearch module', function() {
//
// //   beforeEach(module('MusicSearch'));
// //
// //
// //   // describe('Dummy Test', function() {
// //   //   it('has a dummy spec to test 2 + 2', function() {
// //   //     // An intentionally failing test. No code within expect() will never equal 4.
// //   //     expect(2 + 2).toEqual(4);
// //   //   });
// //   });
// //
// });

/*
*
*/
describe('MusicSearch Testing', function() {
  var MusicSearchFactoryObj;
  var $rootScope;

  // Before each test load our api.users module
  beforeEach(angular.mock.module('MusicSearch'));

  // Before each test set our injected Users factory (_Users_) to our local Users variable
  beforeEach(inject(function(_MusicSearchFactory_, _$rootScope_) {
    MusicSearchFactoryObj = _MusicSearchFactory_;
    $rootScope = _$rootScope_;
  }));

  // A simple test to verify the Users factory exists
  it('Factory should be defined', function() {
    expect(MusicSearchFactoryObj).toBeDefined();
  });

  it('Method getName should be defined', function() {
    expect(MusicSearchFactoryObj.getName).toBeDefined();
  });




  // A set of tests for our Users.all() method
  // describe('.all()', function() {
  //   // A simple test to verify the method all exists
  //   it('should exist', function() {
  //     expect(MusicSearchFactoryObj.all).toBeDefined();
  //   });
  // });

  describe('test getName()', function() {
    it('Test getName', function() {
      // An intentionally failing test. No code within expect() will never equal 4.
      expect(MusicSearchFactoryObj.getName()).toEqual("David");
    });
  })



});
