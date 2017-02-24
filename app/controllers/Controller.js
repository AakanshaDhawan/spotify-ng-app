App.controller('MainCtrl', [
  '$scope', '$timeout', '$http',
  function ($scope, $timeout,$http) {

    //console.log("in controller")

    $scope.tags = [];

    $scope.loadAlbums = function($query) {

      //alert($query)

      //$http.get('https://api.spotify.com/v1/search/'+$query, { cache: true, data: { q: $query,type: 'album'} })

        if($query && $query.length > 0)
        {
            return $http({

                method : "GET",
                url : "https://api.spotify.com/v1/search?q=" + escape($query) + "&type=album",
                cache: true,
                responseType: "json"
                // data: {
                //   q: $query,
                //   type: 'album'
                // }
              }).then(function(response, status) {

                var albums = response.data.albums.items;
                var ret = [];

                var isIn = function(arr,val)
                {
                  for(var j=0; j<arr.length; j++)
                  {
                    if(arr[j].name === val)
                    {
                      return true;
                    }
                  }
                  return false;
                }


                if(albums)
                {

                  for(var i=0; i < albums.length; i++)
                  {
                    console.log(albums[i])

                    if(isIn(ret,albums[i].name) === false){
                      ret.push({
                        "name":albums[i].name,
                        "image": albums[i].images[2].url,
                        "id": albums[i].id
                      })
                    }
                  }

                  console.log(ret)


                  return ret;
                }
                else {
                  return []
                }
              })
              // .then(function(response) {
              // //console.log(response)
              // var albums = response.data.albums;
              //
              // //console.log(albums)
              // return albums.filter(function(album) {
              //       console.log(album)
              //       return true;
              //       //return country.name.toLowerCase().indexOf($query.toLowerCase()) != -1;
              // })

              // return albums.filter(function(album) {
              //       console.log(album)
              //       //return country.name.toLowerCase().indexOf($query.toLowerCase()) != -1;
              // }
              //   return country.name.toLowerCase().indexOf($query.toLowerCase()) != -1;
              //});
              //var countries = response.data;
              // var country = $scope.countries;
              // return countries.filter(function(country) {
              //   return country.name.toLowerCase().indexOf($query.toLowerCase()) != -1;
              //});
        }
        else {
          return []
        }

      //   return $scope.countries.filter(function(country) {
      //     return country.name.toLowerCase().indexOf($query.toLowerCase()) != -1;
      //   });
       //
       //
       //
      //  return $scope.countries.filter(function(country) {
      //    return country.name.toLowerCase().indexOf($query.toLowerCase()) != -1;
      //  });




    };


    /*$scope.user = {};
    $scope.friends = {};

    $scope.logged = false;
    $scope.bye = false;
    $scope.welcome = false;

    $scope.$watch(
      function() {
        return Facebook.isReady();
      },
      function(newVal) {
        if (newVal) {
          $scope.facebookReady = true;
        }
      }
    );

    $scope.IntentLogin = function() {
      Facebook.getLoginStatus(function (response) {
        if (response.status == 'connected') {
          $scope.logged = true;
          $scope.me();
        } else {
          $scope.login();
        }
      });
    };

    $scope.login = function() {
      Facebook.login(function (response) {
        if (response.status == 'connected') {
          $scope.logged = true;
          $scope.me();
          $scope.getFriends();
        }
      });
    };

    $scope.me = function() {
      Facebook.api('/me', function (response) {
        $scope.$apply(function () {
          $scope.user = response;
        });
      });
    };

    $scope.getFriends = function() {
      Facebook.api('/me/friends?fields=name,location', function (response) {
        $scope.$apply(function () {
          $scope.friends = response;
        });
      });
    };

    $scope.logout = function() {
      Facebook.logout(function () {
        $scope.$apply(function () {
          $scope.user = {};
          $scope.friends = {};
          $scope.logged = false;
        })
      });
    };

    $scope.$on('Facebook:statusChange', function (ev, data) {
      console.log('Status: ', data);

      if (data.status == 'connected') {
        $scope.$apply(function () {
          $scope.welcome = true;
          $scope.bye = false;
        });
      } else {
        $scope.$apply( function() {
          $scope.welcome = false;
          $scope.bye = true;
        });
      }
    });*/

  }
]);
