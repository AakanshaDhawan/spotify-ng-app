// @author {David Barrat}
// @date {FEB2017}
'use strict';

MusicSearch.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/music-search/template/view.html',
    controller: 'MusicSearchCtrl'
  })
  .otherwise( { redirectTo: '/' } );
}])
