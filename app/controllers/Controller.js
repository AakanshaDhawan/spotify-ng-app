App.controller('MainCtrl', [
  '$scope', '$timeout', '$http',
  function ($scope, $timeout,$http) {

    $scope.tags = [];
    $scope.inputArtist = "";

    $scope.resultsArtistSearch = [];
    //$scope.resultsArtistSearchwCover = [];

    // Will allow to display properly rows in the view
    $scope.chunk = function(arr, size) {
      var newArr = [];
      for (var i=0; i<arr.length; i+=size) {
        newArr.push(arr.slice(i, i+size));
      }
      return newArr;
    }

    $scope.chunkedDataArtistSearch = [];


    $scope.logArtist = function()
    {
      //console.log($scope.inputArtist)
      if($scope.inputArtist.length > 0)
      {
        return $http({
            method : "GET",
            url : "https://api.spotify.com/v1/search?q=" + escape($scope.inputArtist) + "&type=artist",
            cache: true,
            responseType: "json"
          }).then(function(response, status) {
            var result = response.data.items;
            $scope.resultsArtistSearch = response.data.artists.items;
            $scope.chunkedDataArtistSearch = $scope.chunk($scope.resultsArtistSearch, 4);
          })
      }
      else {
          $scope.resultsArtistSearch = []
          $scope.chunkedDataArtistSearch = []
      }
    }

    $scope.seeAlbums = function(id)
    {
      return $http({
          method : "GET",
          url : "https://api.spotify.com/v1/artists/"+id+"/albums",
          cache: true,
          responseType: "json"
        }).then(function(response, status) {
          //console.log(response.data.items)
          var albums = response.data.items;
          var albumsList = [];

          for(var i=0; i < albums.length ; i++)
          {
              albumsList.push(albums[i].name);
          }

          alert(JSON.stringify(albumsList));
          // var result = response.data.items;
          //console.log(response.data.artists.items);
          // $scope.resultsArtistSearch = response.data.artists.items;
          //console.log(JSON.stringify(response))
        })


      //alert(id);
    }



    // Albums
    $scope.searchMode = "album";




    // Will change search mode
    $scope.switchSearchMode = function()
    {
      if (document.getElementById('radioArtists').checked) {
          $scope.searchMode = "artist";


          document.getElementById("tagInputAlbums").style.display = "none";
          document.getElementById("tagInputArtists").style.display = "block";

      }
      else if(document.getElementById('radioAlbums').checked){
          $scope.searchMode = "album";

          document.getElementById("tagInputAlbums").style.display = "block";
          document.getElementById("tagInputArtists").style.display = "none";

      }
    }


    $scope.loadAlbums = function($query) {

        if($query && $query.length > 0)
        {

            // Setting query type
            var typeQuery = "artist";

            if(document.getElementById('radioArtists').checked)
            {
              typeQuery = "artist";
            }
            else if(document.getElementById('radioAlbums').checked){
              typeQuery = "album";
            }

            if(typeQuery === "album")
            {
              return $http({

                  method : "GET",
                  url : "https://api.spotify.com/v1/search?q=" + escape($query) + "&type=album",
                  cache: true,
                  responseType: "json"
                }).then(function(response, status) {

                  console.log(response)

                  var albums = response.data.albums !== undefined ? response.data.albums.items : [];
                  var ret = [];

                  var isIn = function(arr,val)
                  {
                    for(var j=0; j<arr.length; j++)
                    {
                      if(arr[j].name === val){return true;}
                    }
                    return false;
                  }

                  if(albums.length > 0)
                  {
                    for(var i=0; i < albums.length; i++)
                    {
                      if(isIn(ret,albums[i].name) === false){
                        ret.push({
                          "name":albums[i].name,
                          "thumbnail": albums[i].images[2] !== undefined ? albums[i].images[2].url : '',
                          "cover": albums[i].images[0] !== undefined ? albums[i].images[0].url : '',
                          "id": albums[i].id//,
                          //"type": $scope.searchMode
                        })
                      }
                    }
                    return ret;
                  }
                  else {
                    return []
                  }
                })
            }
          }// query not defined
          else {
            return []
          }
    };



    // PLAYER

      $scope.audioObject = null;
      $scope.idAlbumPlaying = null;

      // Manage state playing
      $scope.isPlaying = false;
      $scope.isPaused  = false;


      $scope.playAlbum = function(idAlbum){

      	if($scope.audioObject)
      	{
      		$scope.audioObject.pause();
          $scope.isPaused  = true;
          $scope.isPlaying = false;
      	}

      	if(idAlbum === $scope.idAlbumPlaying)
      	{
      		$scope.idAlbumPlaying = null;
      	}
      	else {

          return $http({

              method : "GET",
              url : "https://api.spotify.com/v1/albums/" + idAlbum,
              cache: true,
              responseType: "json"
            }).then(function(response){
              //console.log(response)

              $scope.audioObject = new Audio(response.data.tracks.items[0].preview_url);
              $scope.audioObject.play();
              $scope.isPlaying = true;
              $scope.isPaused  = false;
              $scope.idAlbumPlaying = idAlbum;

              $scope.audioObject.addEventListener("paused", function() { $scope.isPaused  = true;  $scope.isPlaying = false; }, true);
              $scope.audioObject.addEventListener("playing", function(){ $scope.isPaused  = false; $scope.isPlaying = true; }, true);

            })
      	}
      }

      $scope.changePlayingState = function(state)
      {

          if(state === false)
          {
            if($scope.audioObject)
            {
              $scope.audioObject.pause();
              $scope.isPaused  = true;
              $scope.isPlaying = false;
            }
          }
          else {
            if($scope.audioObject)
            {
              $scope.audioObject.play();
              $scope.isPaused  = false;
              $scope.isPlaying = true;
            }
          }

      }


  }

])

// App.directive('tabs', function() {
//     // Directive for Bootstrap tabs
//     return {
//       restrict: 'E',
//       transclude: true,
//       scope: {},
//       controller: [ "$scope", function($scope) {
//         var panes = $scope.panes = [];
//
//         $scope.select = function(pane) {
//           angular.forEach(panes, function(pane) {
//             pane.selected = false;
//           });
//           pane.selected = true;
//         }
//
//         this.addPane = function(pane) {
//           if (panes.length == 0) $scope.select(pane);
//           panes.push(pane);
//         }
//       }],
//       template:
//         '<div class="tabbable">' +
//           '<ul class="nav nav-tabs">' +
//             '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">'+
//               '<a href="" ng-click="select(pane)">{{pane.title}}</a>' +
//             '</li>' +
//           '</ul>' +
//           '<div class="tab-content" ng-transclude></div>' +
//         '</div>',
//       replace: true
//     };
//   }).directive('pane', function() {
//     return {
//       require: '^tabs',
//       restrict: 'E',
//       transclude: true,
//       scope: { title: '@' },
//       link: function(scope, element, attrs, tabsCtrl) {
//         tabsCtrl.addPane(scope);
//       },
//       template:
//         '<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
//         '</div>',
//       replace: true
//     };
//   })
