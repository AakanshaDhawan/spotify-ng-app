App.config(function ($routeProvider) {
  $routeProvider
    .when('/',
      {
        controller: 'MainController',
        templateUrl: 'app/templates/main.html'
      }
    )
    .otherwise( { redirectTo: '/error' } );
});
