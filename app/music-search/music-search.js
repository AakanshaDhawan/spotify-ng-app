'use strict';

var MusicSearch = angular.module('MusicSearch', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/music-search/music-search.html',
    controller: 'MusicSearchCtrl'
  })
  .otherwise( { redirectTo: '/' } );
}])


//
//  MusicSearch Controller
//
MusicSearch.controller('MusicSearchCtrl', [ '$scope', '$timeout', '$http','MusicSearchFactory',
  function($scope, $timeout,$http, MusicSearchFactory) {

    // Tags for Album Search
    $scope.tags = [];
    // Input value for Artist Search
    $scope.inputArtist = "";
    // Storing the data from response API (Artist)
    $scope.resultsArtistSearch = [];
    // Helper to display artists on rows
    $scope.chunkedDataArtistSearch = [];


    // Test function to be deleted
    $scope.getName = function(inputArtist)
    {
      MusicSearchFactory.searchAlbums(inputArtist).then(function(data){
        console.log(data);
      });
    }

}])

/*
* MusicSearch Factory
*/
MusicSearch.factory('MusicSearchFactory',function($http) {
  var MusicSearchFactory = {};

  // To be deleted
  MusicSearchFactory.getName = function() {
    return "David"
  }


  // Will allow to display properly rows in the view
  MusicSearchFactory.chunk = function(arr, size) {
    var newArr = [];
    for (var i=0; i<arr.length; i+=size) {
      newArr.push(arr.slice(i, i+size));
    }
    return newArr;
  }

  // searchArtist returns an Object thanks to the Spotify API
  // @param inputArtist {Input User}
  // @return response {Response object from API}
  // returns all artists for a given Input
  MusicSearchFactory.searchArtist = function(inputArtist){
    return $http({
        method : "GET",
        url : "https://api.spotify.com/v1/search?q=" + escape(inputArtist) + "&type=artist",
        cache: true,
        responseType: "json"
      }).then(function(response) {
        return response;
      })
  }

  // searchArtist returns an Object thanks to the Spotify API
  // @param idArtist {Unique artist identifier}
  // @return response {Response object from API}
  // returns all albums for a given Artist Id
  MusicSearchFactory.searchAlbums = function(idArtist){
    return $http({
        method : "GET",
        url : "https://api.spotify.com/v1/artists/"+idArtist+"/albums",
        cache: true,
        responseType: "json"
      }).then(function(response) {
        return response;
      })
  }

  // searchAlbums returns an Object thanks to the Spotify API
  // @param inputQuery {Unique artist identifier}
  // @return response {Response object from API}
  // returns all albums for a given Artist input Query
  MusicSearchFactory.searchAlbums = function(inputQuery){
    return $http({
        method : "GET",
        url : "https://api.spotify.com/v1/search?q=" + escape(inputQuery) + "&type=album",
        cache: true,
        responseType: "json"
      }).then(function(response) {
        return response;
      })
  }

  // getAlbum returns an Object thanks to the Spotify API
  // @param idAlbum {Unique album identifier}
  // @return response {Response object from API}
  // returns an album under JSON format corresponding
  // to the album ID given
  MusicSearchFactory.getAlbum = function(idAlbum){
    return $http({
        method : "GET",
        url : "https://api.spotify.com/v1/albums/" + idAlbum,
        cache: true,
        responseType: "json"
      }).then(function(response) {
        return response;
      })
  }

  return MusicSearchFactory;
})


/*
* Directives
* Needed for Bootstrap Tabs
*/
MusicSearch.directive('tabs', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      controller: [ "$scope", function($scope) {
        var panes = $scope.panes = [];

        $scope.select = function(pane) {
          angular.forEach(panes, function(pane) {
            pane.selected = false;
          });
          pane.selected = true;
        }

        this.addPane = function(pane) {
          if (panes.length == 0) $scope.select(pane);
          panes.push(pane);
        }
      }],
      template:
        '<div class="tabbable">' +
          '<ul class="nav nav-tabs">' +
            '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">'+
              '<a href="" ng-click="select(pane)">{{pane.title}}</a>' +
            '</li>' +
          '</ul>' +
          '<div class="tab-content" ng-transclude></div>' +
        '</div>',
      replace: true
    };
  }).directive('pane', function() {
    return {
      require: '^tabs',
      restrict: 'E',
      transclude: true,
      scope: { title: '@' },
      link: function(scope, element, attrs, tabsCtrl) {
        tabsCtrl.addPane(scope);
      },
      template:
        '<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
        '</div>',
      replace: true
    };
  })
