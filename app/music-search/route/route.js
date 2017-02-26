// @author {David Barrat}
'use strict';

MusicSearch.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/music-search/template/view.html',
    controller: 'MusicSearchCtrl'
  })
  .otherwise( { redirectTo: '/' } );
}])
