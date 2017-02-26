// @author {David Barrat}
// @date {FEB2017}
/*
* MusicSearch Factory
*/
MusicSearch.factory('MusicSearchFactory',function($http) {
  var MusicSearchFactory = {};


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

  // searchArtistAlbums returns an Object thanks to the Spotify API
  // @param idArtist {Unique artist identifier}
  // @return response {Response object from API}
  // returns all albums for a given Artist Id
  MusicSearchFactory.searchArtistAlbums = function(idArtist){
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
