App.config(function ($routeProvider) {
  $routeProvider
    .when('/home',
      {
        controller: 'MainCtrl',
        templateUrl: 'app/templates/main.html'
      }
    )
  //  .otherwise( { redirectTo: '/error' } );
});
