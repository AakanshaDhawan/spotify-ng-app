'use strict';


describe('MusicSearch module Testing', function() {
  var MusicSearchFactoryObj;
  //var $rootScope;

  // Before each test load our MusicSearch module
  beforeEach(angular.mock.module('MusicSearch'));

  // Before each test set our injected MusicSearch factory (_MusicSearchFactory_)
  // to our local MusicSearchFactoryObj variable
  beforeEach(inject(function(_MusicSearchFactory_) {
    MusicSearchFactoryObj = _MusicSearchFactory_;
    //$rootScope = _$rootScope_;
  }));


  // Factory

  // We're testing that Factory exists
  it('Factory should be defined', function() {
    expect(MusicSearchFactoryObj).toBeDefined();
  });

  // Testing if each method from Factory exists
  it('Method chunk should be defined', function() {
    expect(MusicSearchFactoryObj.chunk).toBeDefined();
  });

  it('Method searchArtist should be defined', function() {
    expect(MusicSearchFactoryObj.searchArtist).toBeDefined();
  });

  it('Method searchArtistAlbums should be defined', function() {
    expect(MusicSearchFactoryObj.searchArtistAlbums).toBeDefined();
  });

  it('Method searchAlbums should be defined', function() {
    expect(MusicSearchFactoryObj.searchAlbums).toBeDefined();
  });

  it('Method getAlbum should be defined', function() {
    expect(MusicSearchFactoryObj.getAlbum).toBeDefined();
  });





  // A set of tests for our Users.all() method
  // describe('.all()', function() {
  //   // A simple test to verify the method all exists
  //   it('should exist', function() {
  //     expect(MusicSearchFactoryObj.all).toBeDefined();
  //   });
  // });

  // describe('test getName()', function() {
  //   it('Test getName', function() {
  //     // An intentionally failing test. No code within expect() will never equal 4.
  //     expect(MusicSearchFactoryObj.getName()).toEqual("David");
  //   });
  // })



});
