'use strict';

angular.module('MusicSearch', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/music-search/music-search.html',
    controller: 'MusicSearchCtrl'
  })
  .otherwise( { redirectTo: '/error' } );
}])

.controller('MusicSearchCtrl', [function() {

}]);
