'use strict';

var MusicSearch = angular.module('MusicSearch', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/music-search', {
    templateUrl: 'app/music-search/music-search.html',
    controller: 'MusicSearchCtrl'
  })
  .otherwise( { redirectTo: '/error' } );
}])



MusicSearch.controller('MusicSearchCtrl', [ '$scope', '$timeout', '$http','MusicSearchFactory', function($scope, $timeout,$http, MusicSearchFactory) {
  $scope.getName = function()
  {
    return MusicSearchFactory.getName();
  }

}])


MusicSearch.factory('MusicSearchFactory', function() {
  var MusicSearchFactory = {};

  MusicSearchFactory.getName = function() {
    return "David"
  }



  MusicSearchFactory.all = function() {

  };
  // Users.method = function() {};

  return MusicSearchFactory;
})
