'use strict';

describe('MusicSearch module Testing', function() {
  var MusicSearchFactoryObj;

  // Before each test load our MusicSearch module
  beforeEach(angular.mock.module('MusicSearch'));

  // Before each test set our injected MusicSearch factory (_MusicSearchFactory_)
  // to our local MusicSearchFactoryObj variable
  beforeEach(inject(function(_MusicSearchFactory_) {
    MusicSearchFactoryObj = _MusicSearchFactory_;
  }));

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

  var $q;
  var deferred;

  // Testing returns from Factory methods
  it('Method search artist should return a Promise', inject(function(_$q_) {
    $q = _$q_;
    deferred = _$q_.defer();
    deferred.promise = MusicSearchFactoryObj.searchArtist('Johnny Cash');
    expect(deferred.promise).not.toBe(undefined);
  }));

  it('Method chunk should be return an Array of sub-Arrays', inject(function(_$q_) {
    var arrTest = [1,2,3];
    var ret = MusicSearchFactoryObj.chunk(arrTest, 2);
    expect(ret[0]).toEqual([1,2]);
  }));

  it('Method search searchArtistAlbums should return a Promise', inject(function(_$q_) {
    $q = _$q_;
    deferred = _$q_.defer();
    deferred.promise = MusicSearchFactoryObj.searchArtistAlbums('7dGJo4pcD2V6oG8kP0tJRR');
    expect(deferred.promise).not.toBe(undefined);
  }));

  it('Method searchAlbums should return a Promise', inject(function(_$q_) {
    $q = _$q_;
    deferred = _$q_.defer();
    deferred.promise = MusicSearchFactoryObj.searchAlbums('Wicked Sensation');
    expect(deferred.promise).not.toBe(undefined);
  }));

  it('Method getAlbum  should return a Promise', inject(function(_$q_) {
    $q = _$q_;
    deferred = _$q_.defer();
    deferred.promise = MusicSearchFactoryObj.getAlbum('62U7xIHcID94o20Of5ea4D');
    expect(deferred.promise).not.toBe(undefined);
  }));

});
