App.controller('MainCtrl', [
  '$scope', '$timeout', '$http',
  function ($scope, $timeout,$http) {

    $scope.tags = [];

    $scope.searchMode = "album";// or artists


    // Will change search mode
    $scope.switchSearchMode = function()
    {
      if (document.getElementById('radioArtists').checked) {
          $scope.searchMode = "artists";
      }
      else if(document.getElementById('radioAlbums').checked){
          $scope.searchMode = "album";
      }
    }


    $scope.loadAlbums = function($query) {

        if($query && $query.length > 0)
        {
            return $http({

                method : "GET",
                url : "https://api.spotify.com/v1/search?q=" + escape($query) + "&type=album",
                cache: true,
                responseType: "json"
              }).then(function(response, status) {

                //console.log(response)

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
              $scope.audioObject.addEventListener("ended", function() { $scope.isPaused  = true;   $scope.isPlaying = false;  }, true);
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

      $scope.checkTest = function(boolChecked){

           alert(boolChecked)
      }


  }
]);
