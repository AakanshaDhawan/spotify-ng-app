App.controller('MainCtrl', [
  '$scope', '$timeout', '$http',
  function ($scope, $timeout,$http) {

    $scope.tags = [];
    $scope.loadAlbums = function($query) {

        if($query && $query.length > 0)
        {
            return $http({

                method : "GET",
                url : "https://api.spotify.com/v1/search?q=" + escape($query) + "&type=album",
                cache: true,
                responseType: "json"
              }).then(function(response, status) {

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
                        "thumbnail": albums[i].images[2].url,
                        "cover": albums[i].images[0].url,
                        "id": albums[i].id
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

    $scope.cardflow={};
      // I use a timeout so I have access to all the elements
      $timeout(function(){
          $scope.$watch(function(){ return $scope.cardflow.current; }, function(){
              console.log($scope.cardflow);
          });
      }, 100);

      $scope.cardflow.cards = [];
      var types = ['cats','fashion','nature','food','abstract','nightlife'];
      for (var i=0; i<40; i++){
          var t = types[i % types.length];
          $scope.cardflow.cards.push({image:'http://lorempixel.com/198/198/' + t + '/'+((i%10)+1), title: t});
      }

      $scope.playAlbum = function(id)
      {
        alert(id);
      }


  }
]);
