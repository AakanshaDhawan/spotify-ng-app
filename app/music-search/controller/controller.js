// @author {David Barrat}
// @date {FEB2017}
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

    $scope.logArtist = function()
    {
      if($scope.inputArtist.length > 0)
      {
        MusicSearchFactory.searchArtist($scope.inputArtist).then(function(response) {
          var result = response.data.items;
          $scope.resultsArtistSearch = response.data.artists.items;
          $scope.chunkedDataArtistSearch = MusicSearchFactory.chunk($scope.resultsArtistSearch, 4);
        })
      }
      else {
          $scope.resultsArtistSearch = []
          $scope.chunkedDataArtistSearch = []
      }
    }

    $scope.seeAlbums = function(idAlbum)
    {
          MusicSearchFactory.searchArtistAlbums(idAlbum).then(function(response) {
            //console.log(response.data.items)
            var albums = response.data.items;
            var albumsList = [];

            for(var i=0; i < albums.length ; i++)
            {
                albumsList.push(albums[i].name);
            }
            // To be improved with a modal
            alert(JSON.stringify(albumsList));
          });
    }


    // Will change UI input field
    $scope.switchSearchMode = function()
    {
      if (document.getElementById('radioArtists').checked) {
          document.getElementById("tagInputAlbums").style.display = "none";
          document.getElementById("tagInputArtists").style.display = "block";
      }
      else if(document.getElementById('radioAlbums').checked){
          document.getElementById("tagInputAlbums").style.display = "block";
          document.getElementById("tagInputArtists").style.display = "none";
      }
    }


    $scope.loadAlbums = function($query) {

        if($query && $query.length > 0)
        {

            return MusicSearchFactory.searchAlbums($query).then(function(response) {

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
    };// End loadAlbums


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
      else
      {
        MusicSearchFactory.getAlbum(idAlbum).then(function(response){
            // Instanstiating Audio
            $scope.audioObject = new Audio(response.data.tracks.items[0].preview_url);
            $scope.audioObject.play();
            $scope.isPlaying = true;
            $scope.isPaused  = false;
            $scope.idAlbumPlaying = idAlbum;

            // EventListeners
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

}])// End controller
