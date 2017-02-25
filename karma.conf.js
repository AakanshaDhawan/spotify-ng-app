//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: '.',

    files: [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angular-spotify/dist/angular-spotify.min.js',
      'node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
      'node_modules/angular-module-touch/angular-touch.js',
      'lib/ng-tags-input.min.js',
      'lib/cardflow.min.js',
      'app/app.js',
      'app/config/config.js',
      'app/routes/Routes.js',
      'app/controllers/Controller.js',
      'app/services/Factory.js',
      'app/music-search/music-search.js',
      'app/music-search/music-search_test.js'

    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
