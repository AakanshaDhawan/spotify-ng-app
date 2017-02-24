App.controller('MainCtrl', [
  '$scope', '$timeout', '$http',
  function ($scope, $timeout,$http) {

    //console.log("in controller")

    $scope.tags = [];

    $scope.countries = [
        { "name": "Algeria", "flag": "Algeria.png", "confederation": "CAF", "rank": 21 },
        { "name": "Argentina", "flag": "Argentina.png", "confederation": "CONMEBOL", "rank": 5 },
        { "name": "Australia", "flag": "Australia.png", "confederation": "AFC", "rank": 32 },
        { "name": "Belgium", "flag": "Belgium.png", "confederation": "UEFA", "rank": 11 },
        { "name": "Bosnia and Herzegovina", "flag": "Bosnia-and-Herzegovina.png", "confederation": "UEFA", "rank": 20 },
        { "name": "Brazil", "flag": "Brazil.png", "confederation": "CONMEBOL", "rank": 3 },
        { "name": "Cameroon", "flag": "Cameroon.png", "confederation": "CAF", "rank": 30 },
        { "name": "Chile", "flag": "Chile.png", "confederation": "CONMEBOL", "rank": 14 },
        { "name": "Colombia", "flag": "Colombia.png", "confederation": "CONMEBOL", "rank": 8 },
        { "name": "Costa Rica", "flag": "Costa-Rica.png", "confederation": "CONCACAF", "rank": 24 },
        { "name": "Croatia", "flag": "Croatia.png", "confederation": "UEFA", "rank": 17 },
        { "name": "Ecuador", "flag": "Ecuador.png", "confederation": "CONMEBOL", "rank": 23 },
        { "name": "England", "flag": "England.png", "confederation": "UEFA", "rank": 10 },
        { "name": "France", "flag": "France.png", "confederation": "UEFA", "rank": 16 },
        { "name": "Germany", "flag": "Germany.png", "confederation": "UEFA", "rank": 2 },
        { "name": "Ghana", "flag": "Ghana.png", "confederation": "CAF", "rank": 26 },
        { "name": "Greece", "flag": "Greece.png", "confederation": "UEFA", "rank": 12 },
        { "name": "Honduras", "flag": "Honduras.png", "confederation": "CONCACAF", "rank": 25 },
        { "name": "Iran", "flag": "Iran.png", "confederation": "AFC", "rank": 27 },
        { "name": "Italy", "flag": "Italy.png", "confederation": "UEFA", "rank": 9 },
        { "name": "Ivory Coast", "flag": "Cote-dIvoire.png", "confederation": "CAF", "rank": 22 },
        { "name": "Japan", "flag": "Japan.png", "confederation": "AFC", "rank": 29 },
        { "name": "Mexico", "flag": "Mexico.png", "confederation": "CONCACAF", "rank": 19 },
        { "name": "Netherlands", "flag": "Netherlands.png", "confederation": "UEFA", "rank": 15 },
        { "name": "Nigeria", "flag": "Nigeria.png", "confederation": "CAF", "rank": 28 },
        { "name": "Portugal", "flag": "Portugal.png", "confederation": "UEFA", "rank": 4 },
        { "name": "Russia", "flag": "Russia.png", "confederation": "UEFA", "rank": 18 },
        { "name": "South Korea", "flag": "South-Korea.png", "confederation": "AFC", "rank": 31 },
        { "name": "Spain", "flag": "Spain.png", "confederation": "UEFA", "rank": 1 },
        { "name": "Switzerland", "flag": "Switzerland.png", "confederation": "UEFA", "rank": 6 },
        { "name": "United States", "flag": "United-States.png", "confederation": "CONCACAF", "rank": 13 },
        { "name": "Uruguay", "flag": "Uruguay.png", "confederation": "CONMEBOL", "rank": 7 }
    ];



    $scope.loadAlbums = function($query) {

      //alert($query)

      $http.get('https://api.spotify.com/v1/search/'+$query, { cache: true, data: { q: $query,type: 'album'} })

        if($query && $query.length > 0)
        {
            return $http({
                method : "GET",
                url : "https://api.spotify.com/v1/search?q=" + $query + "&type=album",
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
                        "image": albums[i].images[2].url
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
