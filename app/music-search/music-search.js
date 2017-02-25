'use strict';

angular.module('MusicSearch', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/music-search', {
    templateUrl: 'app/music-search/music-search.html',
    controller: 'MusicSearchCtrl'
  })
  .otherwise( { redirectTo: '/error' } );
}])

.controller('MusicSearchCtrl', [function() {

}]);
