'use strict';

angular.module('MusicSearch', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/music-search', {
    templateUrl: 'app/music-search/music-search.html',
    controller: 'MusicSearchCtrl',
    resolve: {
       searchQuery: function ($route) {
         // grabs search qeruy from URL
         return $route.current.params.query;
      }
    }
  })
  .otherwise( { redirectTo: '/error' } );
}])

.controller('MusicSearchCtrl', [ function($scope, $timeout,$http) {


}])

.factory('MusicSearchFactory', function() {
  var Users = {};


  Users.all = function() {

  };
  // Users.method = function() {};

  return Users;
});
